import Editor from '@monaco-editor/react'
import RunCodeButton from './RunCodeButton'
import { Suspense, useState } from 'react'

type Props = {
  code: string
  onProcessingStart: (result: string) => void
  onProcessingEnd: (result: string) => void
}

export default function ({
  code: defaultCode,
  onProcessingStart,
  onProcessingEnd,
}: Props) {
  const [code, setCode] = useState<string>(defaultCode)

  return (
    <div className="flex flex-col">
      <Editor
        height="40vh"
        defaultLanguage="php"
        theme="vs-dark"
        defaultValue={defaultCode}
        className="rounded"
        onChange={(value) => {
          setCode(value || '')
        }}
        wrapperProps={{
          className: 'rounded-t-lg rounded-l-lg overflow-hidden',
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
