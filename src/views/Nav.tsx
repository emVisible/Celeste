import EmNav from '@/components/nav/emNav'
import EmSearch from '@/components/nav/emSearch'
import { Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'

export default () => {
  return (
    <Layout className="w-screen h-screen">
      <Content className="flex flex-col">
        <EmNav  />
      </Content>
      <Footer className="min-h-40">
        <EmSearch />
      </Footer>
    </Layout>
  )
}
