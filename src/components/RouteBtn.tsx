import { Avatar } from 'antd'
import { Navigate } from 'react-router-dom'

function RouteBtn(e: any) {
  const { avatar, location } = e
  const handleClick = () => {
    console.log('location', location)
    return <Navigate to={ "/" + location}></Navigate>
  }
  return (
    <Avatar
      onClick={handleClick}
      className="rounded-full flex justify-center items-center mb-6 cursor-pointer transition-all hover:scale-150"
      size="large"
      src={avatar}></Avatar>
  )
}

export default RouteBtn
