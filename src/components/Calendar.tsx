import { Calendar } from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'

function Canlendar() {
  const [value, setValue] = useState(() => dayjs())
  return <Calendar value={value} className="" headerRender={() => null} />
}

export default Calendar
