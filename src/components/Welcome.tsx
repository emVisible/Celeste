import { Flex, Grid, Layout, Row } from 'antd'
import { Component } from 'react'
export default () => {
  const render = () => {
    return <h2 className="text-[4rem] italic text-white">Welcome</h2>
  }

  return (
    <Row className="w-screen h-screen bg-[#222f3e]">
      <div className='absolute right-28 bottom-14'>{render()}</div>
    </Row>
  )
}
