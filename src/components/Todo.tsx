import { PreviewClose, PreviewOpen, Tips } from '@icon-park/react'
import { Avatar, Badge, Button, Card, Input, List } from 'antd'
import React, { RefObject, SetStateAction, useEffect, useRef, useState } from 'react'

interface TodoStructure {
  theme: string
  details: string[]
}

function TodoTheme({ details, setDetails }) {
  const [focus, setFocus] = useState(localStorage.getItem('theme') || false)
  const [isFocusSet, setIsFocusSet] = useState(localStorage.getItem('theme') || false)
  const [inputs, setInputs] = useState([
    {
      key: 1,
      value: '',
    },
  ])
  const inputRef: RefObject<HTMLInputElement> = useRef(null)
  const handleMain = () => {
    setFocus(!focus)
  }

  return (
    <>
      <Card
        className="w-full"
        title={
          <section className="flex">
            <div>Focus</div>
            <div id="focusTxt" className="ml-auto cursor-pointer" onClick={handleMain}>
              {focus && isFocusSet ? (
                <PreviewOpen theme="filled" size="24" fill="#706FD3" />
              ) : (
                <PreviewClose theme="filled" size="24" fill="#706FD3" />
              )}
            </div>
          </section>
        }>
        {isFocusSet && localStorage.getItem('theme') ? (
          <section>
            <div
              className="cursor-pointer text-center text-base py-3 transition-all hover:text-violet-400"
              onClick={(e) => {
                if (localStorage.getItem('theme')) {
                  localStorage.removeItem('theme')
                  setIsFocusSet(!isFocusSet)
                }
              }}>
              🔶{localStorage.getItem('theme')}
            </div>
          </section>
        ) : (
          <></>
        )}
        {!(focus && isFocusSet) ? (
          inputs.map((item, index) => {
            return (
              <input
                key={index}
                ref={inputRef}
                type="text"
                className="outline-none border-b-2 border-b-blue-500 text-center "
                placeholder="To focus on..."
                defaultValue={item.value}
                onChange={(e) => {
                  inputs[index].value = e.target.value
                  setInputs([...inputs])
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && inputs[index].value.length != 0) {
                    localStorage.setItem('theme', inputs[index].value)
                    setIsFocusSet(true)
                    setFocus(true)
                  }
                }}
              />
            )
          })
        ) : (
          <></>
        )}
        <Badge className="w-full mt-3">
          {!(focus && isFocusSet) ? (
            <p className="opacity-35 cursor-default text-center">Hard choice, Easy life</p>
          ) : (
            <></>
          )}
        </Badge>
        {focus && isFocusSet ? (
          <Button
            className="w-full"
            onClick={(e) => {
              // details.push({ title: 'New！！' })
              // console.log('details', details)
              // console.log('setDetails',setDetails)
              setDetails([
                ...details,
                {
                  id: details.length,
                  title: 'NewItem',
                  description: '...',
                  done: false,
                },
              ])
              console.log('details', details)
            }}>
            +
          </Button>
        ) : (
          <></>
        )}
      </Card>
    </>
  )
}
function TodoDetail({ details, setDetails }) {
  return (
    <List
      itemLayout="horizontal"
      className="text-white"
      dataSource={details}
      renderItem={(item, index) => (
        <List.Item className="transition-all cursor-pointer hover:scale-105">
          <List.Item.Meta
            avatar={
              <Avatar
                shape="square"
                icon={'💠'}
                className="hover:scale-110 bg-white cursor-pointer transition-all"
                onClick={(e) => {
                  // 同步修改
                  item.done = !item.done
                  console.log('item', item)
                }}
              />
            }
            title={
              <>
                <p className="font-bold cursor-pointer">{item.title}</p>
                <Input
                  type="text"
                  defaultValue={item.title}
                  onChange={(e) => {
                    //     let obj = {} as any
                    //     console.log(
                    //       details.map((detail) => {
                    //         if (detail.id == index) {
                    //           console.log('detail', detail)
                    //           obj = detail
                    //           // Object.keys(detail).map((a) => {
                    //           //   obj[a] = detail[a]
                    //           // })
                    //           obj.title = e.target.value
                    //         }
                    //       }),
                    //     )
                    //     let tmp = details.map((detail) => {
                    //       if (detail.id == index) {
                    //         return obj
                    //       }
                    //     })
                    //     setDetails(tmp)
                    //     console.log('detail', details)
                  }}
                />
              </>
            }
            description="Blabla"
          />
        </List.Item>
      )}
    />
  )
}

export default function Todo() {
  // 模拟数据
  const [details, setDetails] = useState([
    {
      id: 0,
      title: 'Ant Design Title 1',
      description: '',
      done: false,
    },
  ])
  return (
    <section className="px-3 py-3 w-full h-full overflow-y-scroll ">
      <TodoTheme details={details} setDetails={setDetails} />
      <TodoDetail details={details} setDetails={setDetails} />
    </section>
  )
}
