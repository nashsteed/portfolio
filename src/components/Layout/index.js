import { Outlet } from 'react-router-dom'
import { MenuBar } from '../MenuBar/MenuBar'
import './index.scss'
import { TabBar } from '../TabBar/TabBar'

const Layout = () => {
  return (
    <div className="App">
      <MenuBar />
      <TabBar />
      <div className="page">

        <Outlet />
      </div>
    </div>
  )
}

export default Layout
