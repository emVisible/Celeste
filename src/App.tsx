import Welcome from '@/components/Welcome'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Nav from './views/Nav'
import Blog from './views/Blog'
import Ratio from './views/Ratio'
function App() {
  return (
    <>
      <Routes>
        <Route path='' Component={Nav}></Route>
        <Route path='blog' Component={Blog}></Route>
        <Route path='ratio' Component={Ratio}></Route>
      </Routes>
    </>
  )
}

export default App
