import { Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import { useEffect } from 'react'

export default () => {
  const getData = async () => {
    fetch('http://127.0.0.1:3000/api')
      .then((r) => r.text())
      .then(console.log)
  }
  useEffect(() => {
    getData()
  }, [])

  // console.log('data',data)
  return (
    <Layout>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  )
}
