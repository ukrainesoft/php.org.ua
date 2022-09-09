import codeRunner from './helpers/codeRunner'

type PropType = {
  children: any
  code: string
  // TODO Here should be used CQRS pattern
  onProcessingStart: (code: string) => void
  onProcessingEnd: (result: string) => void
}

export default ({
  children,
  code,
  onProcessingStart,
  onProcessingEnd,
}: PropType) => {
  return (
    <button
      className="text-white text-xl font-bold text-center bg-sky-500 hover:bg-sky-700 py-2 px-4 rounded"
      onClick={async () => {
        onProcessingStart(code)
        onProcessingEnd(await codeRunner(code))
      }}
    >
      {children}
    </button>
  )
}
