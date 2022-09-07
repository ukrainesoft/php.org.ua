import Spinner from './Spinner'

const resultClasses = [
  'text-gray-300',
  'bg-gray-800',
  'p-5',
  'w-full',
  'rounded',
]
const resultClass = [...resultClasses, 'text-left', 'overflow-y-scroll']
const resultClassLoading = [
  ...resultClasses,
  // TODO Justify center in block
  'justify-center',
]

type Props = {
  result: string
  loading: boolean
}

export default function ({ result, loading }: Props) {
  if (loading) {
    return <div className={resultClassLoading.join(' ')}>{Spinner}</div>
  }
  return result ? <div className={resultClass.join(' ')}>{result}</div> : <></>
}