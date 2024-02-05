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
      className="mb-6 lg:mb-0 p-2 sm:px-12 lg:px-8 bg-sky-800 hover:bg-sky-900 font-bold border-sky-800 text-white rounded-tl-lg rounded-br-lg"
      onClick={async () => {
        onProcessingStart(code)
        const response = await codeRunner(code)
        onProcessingEnd(response)
      }}
    >
      {children}
    </button>
  )
}
