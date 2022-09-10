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
      className="sm:mx-3 bg-sky-800 hover:bg-sky-900 font-bold border-sky text-white p-3 sm:px-12 lg:px-8 mb-6 lg:mb-0 rounded-b-lg"
      onClick={async () => {
        onProcessingStart(code)
        onProcessingEnd(await codeRunner(code))
      }}
    >
      {children}
    </button>
  )
}
