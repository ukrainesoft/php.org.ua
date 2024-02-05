import { useEffect, useState } from 'react'
import RunCodeButton from './RunCodeButton'
import { useWindupString } from 'windups'
import { Editor } from './Editor'

type Props = {
  code?: string
  onProcessingStart: (result: string) => void
  onProcessingEnd: (result: string) => void
  onCodeChange?: (code: string) => void
  animate?: boolean
}

export default function ({
  code: defaultCode,
  onCodeChange,
  onProcessingStart,
  onProcessingEnd,
  animate,
}: Props) {
  const [code, setCode] = useState(defaultCode || '')
  if (animate) {
    const [animatedCode] = useWindupString(defaultCode || '')
    useEffect(() => {
      setCode(animatedCode)
    }, [animatedCode])
  }

  return (
    <div className="flex flex-col w-full relative">
      <Editor
        onCodeChange={(code) => {
          onCodeChange?.(code)
          setCode(code || '')
        }}
      >
        {code}
      </Editor>
      <div className="self-end z-10 absolute bottom-0 right-0">
        <RunCodeButton
          code={code}
          onProcessingStart={onProcessingStart}
          onProcessingEnd={onProcessingEnd}
        >
          ▶
        </RunCodeButton>
      </div>
    </div>
  )
}
