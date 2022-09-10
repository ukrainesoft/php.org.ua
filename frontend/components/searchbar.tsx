import Link from 'next/link'
import { useState } from 'react'
import { getSearchResult, SearchResult } from '../lib/api/search'

const TEXT_SEARCH_FORM_SEARCH_RESULT_TITLE = 'Результати пошуку:'
const TEXT_SEARCH_FORM_INPUT_PLACEHOLDER = 'Пошук...'

const SearchBar = ({ className }: { className?: string }) => {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<SearchResult[]>([])
  const resetForm = () => {
    setQuery('')
    setResult([])
  }
  return (
    <div
      className={
        'pointer-events-auto w-full rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 ring-1 ring-slate-700/10 ' +
        className
      }
    >
      <div className="flex items-center py-2.5 px-3.5 text-slate-400">
        <svg
          className="mr-2 h-5 w-5 stroke-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input
          type="text"
          className="outline-none block w-full h-full"
          placeholder={TEXT_SEARCH_FORM_INPUT_PLACEHOLDER}
          value={query}
          onChange={async (e) => {
            const val = e.target.value
            setQuery(val)
            if (val.length > 2) {
              setResult(await getSearchResult(val))
            }
          }}
        />
      </div>
      {result.length > 0 && (
        <>
          <div className="border-t border-slate-400/20 py-3 px-3.5 absolute bg-white left-0 sm:left-auto">
            <div className="mb-1.5 text-[0.6875rem] font-semibold text-slate-500">
              {TEXT_SEARCH_FORM_SEARCH_RESULT_TITLE}
            </div>
            {result.map((item) => (
              <Link href={item.path} key={item.name}>
                <div
                  className="rounded-md p-1.5 border-t cursor-pointer hover:bg-sky-800 hover:text-gray-100"
                  onClick={() => resetForm()}
                >
                  <div className="font-semibold">{item.name}</div>
                  <div className="truncate">{item.text}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="border-t border-slate-400/20 py-3 px-3.5 overflow-hidden max-w-full"></div>
        </>
      )}
    </div>
  )
}

export default SearchBar
