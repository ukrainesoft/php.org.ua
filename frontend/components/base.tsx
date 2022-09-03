import Head from 'next/head'
import React from 'react'
import Container from './container'
import Layout from './layout'

type Props = {
  children: React.ReactNode
  title: string
}

export default ({ children, title }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>{children}</Container>
      </Layout>
    </>
  )
}
