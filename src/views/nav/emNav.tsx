import data from '@/assets/data'
import { Avatar, Card, Col, Flex, Grid, Row } from 'antd'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <article id="magicFront" className="flex justify-center flex-1 bg-[#353B48] py-3 px-3 overflow-hidden">
      {data.map((item, index) => {
        return (
          <Flex key={index} gap="middle" className="flex-1 mx-3">
            <Card className="flex flex-col flex-1 overflow-hidden bg-transparent border-none" title={<div>Title</div>}>
              {item.map((subItem, subIndex) => {
                return (
                  <Row className="my-3 flex flex-1 justify-center" key={subIndex}>
                    <NavLink
                      to={subItem.link}
                      className="py-10 flex justify-center items-center flex-1 p-0  bg-[#706FD3] rounded-lg transition-all hover:bg-[#9980FA] hover:scale-110">
                      <Avatar shape="square" src={<img src={subItem.imgUrl} alt="avatar" />} />
                      <p className="quota text-white font-mono transition-all">{subItem.name}</p>
                    </NavLink>
                  </Row>
                )
              })}
            </Card>
          </Flex>
        )
      })}
    </article>
  )
}
