import Search from 'antd/es/input/Search'
import { calc } from 'antd/es/theme/internal'

export default () => {
  const onSearch = () => {}
  return <Search placeholder="input search text" onSearch={onSearch}/>
}
