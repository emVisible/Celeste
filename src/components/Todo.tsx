import { PreviewClose, PreviewOpen } from '@icon-park/react'
import { Badge, Card } from 'antd'
import { RefObject, SetStateAction, useEffect, useRef, useState } from 'react'
function TodoTheme() {
  const [focus, setFocus] = useState(false)
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
      {focus ? (
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
            />
          )
        })
      ) : (
        <></>
      )}
      <Badge>
        <p className="opacity-35 cursor-default">All the past is prologue</p>
      </Badge>
    </Card>
  )
}

function Todo() {
  const [focusText, setFocusText] = useState('')
  const TodoDetail = () => {
    return <Card title={focusText ? <div>focusText + 'Specific' </div> : <div>To set Focus</div>}></Card>
    return <></>
  }
  return (
    <section className="flex-1 flex flex-col justify-around">
      <TodoTheme />
      <TodoDetail />
    </section>
  )
}

export default Todo
