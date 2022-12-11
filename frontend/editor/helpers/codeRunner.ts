import { EventSourcePolyfill } from 'event-source-polyfill'
import { v4 as uuidv4 } from 'uuid'

type RunnerResponseType = {
  result: {
    output: string
    slug: string
  }
}

const loginEndpoint = process.env.NEXT_PUBLIC_CODE_RUNNER_AUTH_ENDPOINT || ''
const codeRunEndpoint = process.env.NEXT_PUBLIC_CODE_RUNNER_ENDPOINT || ''

/**
 *  Code handling is done by the next way:
 *  1. Anonymous user generate uuid
 *  2. Post it to VITE_CODE_RUNNER_LOGIN_ENDPOINT. Receives 1. from link header mercure hub 2. in jwt body topic to which subscribe to get responses
 *  3. Subscribe to the getted hub to the particular topic (get from the jwt) with header Authorize: Bearer <jwt> (got earlier, need to authorize on the Mercure hub)
 *  4. Send via POST request body to VITE_CODE_RUNNER_ENDPOINT . This request adds code to the queue to handle
 *  5. Wait for response from Mercure hub
 */
export default async function (code: string): Promise<string> {
  if (!codeRunEndpoint || !loginEndpoint) {
    throw new Error('Endpoint for login and code run should be set up')
  }

  // TODO Make the real auth system. This is done only to prevent subscriptions to topics
  // that doesn't belongs to this particular client (just for this page)
  const jwt = await getExistingJwtOrGenerateNew(uuidv4())

  let eventSource = createEventSourceConnection(jwt)
  eventSource.onerror = async (event: any) => {
    console.error(event)
    const jwt = await updateJwt(uuidv4())
    eventSource = createEventSourceConnection(jwt)
  }

  return new Promise((resolve, rejects) => {
    try {
      eventSource.onopen = async () => {
        // Reuse previous jwt if it's possible
        try {
          await sendCodeToServer(code, jwt)
        } catch (e) {
          const newJwt = await updateJwt(uuidv4())
          console.log('New jwt:', newJwt)

          await sendCodeToServer(code, newJwt)
        }
      }
      eventSource.onmessage = (event: any) => {
        console.log(event.data)
        const data = JSON.parse(event.data) as RunnerResponseType
        resolve(data.result.output)
        eventSource.close()
      }
    } catch (e) {
      rejects(`Looks like mercure hub is broken`)
      throw new Error(`Looks like mercure hub is broken`)
    }
  })
}

function createEventSourceConnection(jwt: string) {
  const topic = parseJwt(jwt)?.mercure.subscribe[0]
  const hub = getMercureHubUrl()
  if (!hub) {
    throw new Error('Mercure hub address should be gotten from the /login page')
  }
  const eventSource = new EventSourcePolyfill(hub + '?topic=' + topic, {
    headers: {
      Authorization: 'Bearer ' + jwt,
    },
  })
  return eventSource
}

async function sendCodeToServer(code: string, jwt: string) {
  await fetch(codeRunEndpoint, {
    method: 'POST',
    body: JSON.stringify({ code }),
    headers: {
      Authorization: 'Bearer ' + jwt,
      'Content-type': 'application/json',
    },
  })
}

function parseJwt(token: string) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

async function updateJwt(apiKey: string): Promise<string> {
  const response = await fetch(loginEndpoint, {
    headers: {
      'x-auth-token': apiKey,
    },
  })
  const jwt = await response.text()
  localStorage.setItem('jwt', jwt)

  initMercureHubUrl(response)

  return getJwt()
}

function getJwt(): string {
  return localStorage.getItem('jwt') || ''
}

async function getExistingJwtOrGenerateNew(apiKey: string): Promise<string> {
  const jwt = localStorage.getItem('jwt') || ''
  if (jwt) {
    return jwt
  }

  return await updateJwt(apiKey)
}

function initMercureHubUrl(response: Response) {
  const link = response.headers.get('Link') || ''
  const hubUrl = (link.match(
    /<([^>]+)>;\s+rel=(?:mercure|"[^"]*mercure[^"]*")/
  ) || [])[1]
  setMercureHubUrl(hubUrl)
}

function getMercureHubUrl(): string {
  return localStorage.getItem('mercure_hub') || ''
}

function setMercureHubUrl(url: string): void {
  return localStorage.setItem('mercure_hub', url)
}
