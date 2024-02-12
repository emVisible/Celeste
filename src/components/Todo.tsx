import { PreviewClose, PreviewOpen } from '@icon-park/react'
import { Avatar, Badge, Card, List } from 'antd'
import { RefObject, SetStateAction, useEffect, useRef, useState } from 'react'
function TodoTheme() {
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
    <Card
      style={{ width: '200px' }}
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
              key={item.key}
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
    </Card>
  )
}

function Todo() {
  const TodoDetail = () => {
    const data = [
      {
        title: 'Ant Design Title 1',
      },
    ]
    return (
      <List
        itemLayout="horizontal"
        className="text-white cursor-pointer transition-all hover:scale-110"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar shape="square" icon={'💠'} style={{ background: 'white', cursor: 'pointer' }} />}
              title={
                <p className="font-bold">
                  {item.title}
                </p>
              }
              description="Blabla"
            />
          </List.Item>
        )}
      />
    )
  }
  return (
    <section className="flex-1 flex flex-col justify-around">
      <TodoTheme />
      <TodoDetail />
    </section>
  )
}

export default Todo
