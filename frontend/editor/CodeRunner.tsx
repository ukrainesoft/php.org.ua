import { useState } from 'react'
import CodeResult from './CodeResult'
import EditorWithButton from './EditorWithButton'

type Props = {
  code: string
  onCodeChange?: (code: string) => void
  animate?: boolean
}

export default ({ code, onCodeChange, animate }: Props) => {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <>
      <EditorWithButton
        animate={animate}
        code={code}
        onProcessingEnd={(result: string) => {
          setResult(result)
          setLoading(false)
        }}
        onProcessingStart={() => setLoading(true)}
        onCodeChange={onCodeChange}
      />
      <CodeResult result={result} loading={loading} />
    </>
  )
}
