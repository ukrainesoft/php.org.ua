import MonacoEditor from '@monaco-editor/react'

const LINE_HEIGHT = 18

export const Editor = ({
  children,
  onCodeChange,
  readOnly,
}: {
  children: string
  readOnly?: boolean
  onCodeChange?: (code: string) => void
}) => (
  <MonacoEditor
    height={Math.max(45, LINE_HEIGHT * children.split('\n').length) + 'px'}
    defaultLanguage="php"
    theme="vs-dark"
    value={children}
    className="rounded-lg"
    onChange={(value) => {
      onCodeChange && onCodeChange(value || '')
    }}
    wrapperProps={{
      className: 'rounded-lg overflow-hidden',
    }}
    options={{
      minimap: {
        enabled: false,
      },
      readOnly: typeof readOnly === 'undefined' ? false : readOnly,
      scrollBeyondLastLine: false,
    }}
  />
)
