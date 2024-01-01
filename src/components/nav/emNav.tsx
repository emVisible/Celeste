import data from '@/assets/data'
import { Avatar, Button, Card, Col, Flex, Row } from 'antd'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <article className="flex justify-center flex-1">
      {data.map((item, index) => {
        return (
          <Flex key={index} vertical gap={'middle'} className="flex-1">
            {item.map((subItem, subIndex) => {
              return (
                <Row key={subIndex} className="flex-1 justify-center ">
                  <Card className="flex justify-center items-center flex-1 p-0">
                    <NavLink to={subItem.link} className="flex p-0">
                      <Avatar src={<img src={subItem.imgUrl} alt="avatar" />} />
                      <Button>{subItem.name}</Button>
                    </NavLink>
                  </Card>
                  <Card className="flex justify-center items-center flex-1 p-0">
                    <NavLink to={subItem.link} className="flex p-0">
                      <Avatar src={<img src={subItem.imgUrl} alt="avatar" />} />
                      <Button>{subItem.name}</Button>
                    </NavLink>
                  </Card>
                </Row>
              )
            })}
          </Flex>
        )
      })}
    </article>
  )
}
