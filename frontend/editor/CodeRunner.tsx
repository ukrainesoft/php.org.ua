import { useState } from 'react'
import CodeResult from './CodeResult'
import EditorWithButton from './EditorWithButton'

type Props = {
  code: string
}

export default ({ code }: Props) => {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <>
      <EditorWithButton
        code={code}
        onProcessingEnd={(result: string) => {
          setResult(result)
          setLoading(false)
        }}
        onProcessingStart={() => setLoading(true)}
      />
      <CodeResult result={result} loading={loading} />
    </>
  )
}
