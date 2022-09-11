import Editor from '@monaco-editor/react'
import { useEffect, useState } from 'react'
import RunCodeButton from './RunCodeButton'
import { useWindupString } from 'windups'

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
    <div className="flex flex-col">
      <Editor
        height="40vh"
        defaultLanguage="php"
        theme="vs-dark"
        value={code}
        className="rounded h-full"
        onChange={(value) => {
          onCodeChange && onCodeChange(value || '')
          setCode(value || '')
        }}
        wrapperProps={{
          className: 'rounded-t-lg rounded-l-lg overflow-hidden h-full w-full',
        }}
      />
      <div className="self-end mb-2">
        <RunCodeButton
          code={code}
          onProcessingStart={onProcessingStart}
          onProcessingEnd={onProcessingEnd}
        >
          Виконати
        </RunCodeButton>
      </div>
    </div>
  )
}
