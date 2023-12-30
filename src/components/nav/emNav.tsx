import data from '@/assets/data'
import { Col, Flex, Row } from 'antd'

export default () => {
  return (
    <article className="flex justify-center flex-1">
      {data.map((item, index) => {
        return (
          <Flex key={index} vertical gap={'middle'} className="flex-1">
            {item.map((subItem, subIndex) => {
              return (
                <Row key={subIndex} className="flex-1 justify-center ">
                  <Col span={8} className="flex justify-center items-center flex-1 ">
                    <div>{subItem.imgUrl}</div>
                    <div>{subItem.name}</div>
                  </Col>
                  <Col span={8} className="flex justify-center items-center flex-1 ">
                    <div>{subItem.imgUrl}</div>
                    <div>{subItem.name}</div>
                  </Col>
                </Row>
              )
            })}
          </Flex>
        )
      })}
    </article>
  )
}
