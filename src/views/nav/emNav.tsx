import data from '@/assets/data'
import { Avatar, Col, Flex, Grid, Row } from 'antd'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <article id="magicFront" className="flex justify-center flex-1 bg-[#353B48] py-3">
      {data.map((item, index) => {
        return (
          <Flex key={index} vertical gap="middle" className="flex-1 mx-3">
            {item.map((subItem, subIndex) => {
              return (
                <Row className="flex-1 justify-center " key={subIndex}>
                  <NavLink
                    to={subItem.link}
                    className=" flex justify-center items-center flex-1 p-0  bg-[#706FD3] rounded-lg transition-all hover:bg-[#9980FA] hover:text-3xl">
                    <Avatar src={<img src={subItem.imgUrl} alt="avatar" />} />
                    <p className="quota text-white font-mono transition-all">{subItem.name}</p>
                  </NavLink>
                </Row>
              )
            })}
          </Flex>
        )
      })}
    </article>
  )
}
