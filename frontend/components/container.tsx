import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="container mx-auto p-5 bg-[url('/hero-bg.svg')]">
      {children}
    </div>
  )
}

export default Container
