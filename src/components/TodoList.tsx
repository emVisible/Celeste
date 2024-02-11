import { AddOne, PreviewClose, PreviewOpen } from '@icon-park/react'
import { Badge, Calendar, Card, Input, Layout } from 'antd'
import Meta from 'antd/es/card/Meta'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

function TodoList() {
  const [iptShow, setIptShow] = useState(false)
  const [focus, setFocus] = useState(false)
  const [focusText, setFocusText] = useState('')
  let todoFocus: HTMLElement
  setTimeout(() => {
    todoFocus = document.getElementById('focusIpt')!
  })
  const handleMain = () => {
    setIptShow(!iptShow)
    setFocus(!focus)
  }
  useEffect(() => {
    setTimeout(() => {
      if (iptShow) {
        todoFocus!.style.display = 'block'
      } else {
        todoFocus!.style.display = 'hidden'
      }
    })
  })
  const Todo = () => {
    return (
      <section className="flex-1 flex flex-col justify-around">
        <Card
          style={{ width: '200px' }}
          title={
            <div className="flex">
              <div>Focus</div>
              <div id="focusTxt" className="ml-auto cursor-pointer" onClick={handleMain}>
                {focus ? (
                  <PreviewOpen theme="filled" size="24" fill="#706FD3" />
                ) : (
                  <PreviewClose theme="filled" size="24" fill="#706FD3" />
                )}
              </div>
            </div>
          }>
          <input
            id="focusIpt"
            type="text"
            className="outline-none border-b-2 border-b-blue-500 text-center hidden "
            placeholder="To focus on..."
          />
          <Badge>
            <p className="opacity-35 cursor-default">All the past is prologue</p>
          </Badge>
        </Card>
        <Card title={focusText ? <div>focusText + 'Specific' </div> : <div>To set Focus</div>}></Card>
      </section>
    )
  }
  return (
    <Layout className="">
      <Sider
        className=" overflow-clip"
        width={'15%'}
        style={{ background: 'linear-gradient(to left, #feca57, #ff9f43)' }}>
        <Todo></Todo>
      </Sider>
      <Content className=" overflow-scroll">
        <Calendar />
      </Content>
    </Layout>
  )
}

export default TodoList
