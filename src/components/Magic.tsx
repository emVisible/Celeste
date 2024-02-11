import { GlobalOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import { Magic } from '@icon-park/react'

export default () => {
  const handleMagic = () => {
  console.log("magic")
  }
  return (
    <button
      className="opacity-30 p-5 transition-opacity hover:opacity-100"
      onClick={() => {
        handleMagic()
      }}>
      <Magic theme="outline" size="24" fill="#333" />
    </button>
  )
}
