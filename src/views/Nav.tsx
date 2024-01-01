import Magic from '@/components/Magic'
import EmNav from '@/components/nav/emNav'
import EmSearch from '@/components/nav/emSearch'
import { Flex, Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'

export default () => {
  const contentStyle = {
    height:`calc(100% - 160px)`
  }
  return (
    <Layout className="w-screen h-screen flex">
      <Content className="flex flex-col" style={contentStyle}>
        <EmNav />
      </Content>
      <Footer className="min-h-40 flex-1">
        <Flex className='w-full h-full'>
          <Magic/>
          <EmSearch />
        </Flex>
      </Footer>
    </Layout>
  )
}
