import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default ({ children }: Props) => (
  <div className="container mx-auto p-5 bg-[url('/hero-bg.svg')]">
    {children}
  </div>
)
