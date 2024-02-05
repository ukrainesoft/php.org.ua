import Spinner from './Spinner'

const resultClasses = [
  'text-gray-300',
  'bg-gray-800',
  'dark:bg-gray-900',
  'p-5',
  'mt-4',
  'w-full',
  'rounded-lg',
]
const resultClass = [...resultClasses, 'text-left', 'overflow-y-scroll']
const resultClassLoading = [
  ...resultClasses,
  'justify-center',
  'flex',
  'flex-row',
]

type Props = {
  result: string
  loading: boolean
}

export default function ({ result, loading }: Props) {
  if (loading) {
    return <div className={resultClassLoading.join(' ')}>{Spinner}</div>
  }
  return result ? <pre className={resultClass.join(' ')}>{result}</pre> : <></>
}
