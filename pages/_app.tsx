import React from 'react'
import Head from 'next/head'
import App from 'next/app'
import MainLayout from "../components/layout"
import GeneralError from '../components/error'
// import { } from "../lib/types"
// import { isServer } from '../lib/util'

import "../styles/index.scss"
import 'antd/lib/grid/style/index.css'
import 'antd/lib/form/style/index.css'
import 'antd/lib/upload/style/index.css'
import 'antd/lib/button/style/index.css'
import 'antd/lib/message/style/index.css'
import 'antd/lib/input/style/index.css'
import 'antd/lib/spin/style/index.css'

class MainApp extends App<{}, {}> {
  componentDidCatch(error: Error, _errorInfo: any/*ErrorInfo*/) {
    console.error(error)
    return <GeneralError />
  }

  render() {
    const { Component } = this.props

    // Does the current component want its own layout?
    const Layout = (Component as any).Layout || MainLayout

    return <>
      <Head>
        <title>{process.env.PAGE_TITLE}</title>
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  }
}

export default MainApp
