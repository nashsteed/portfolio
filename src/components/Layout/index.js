import { Outlet } from 'react-router-dom'
import { MenuBar } from '../MenuBar/MenuBar'
import './index.scss'
import { TabBar } from '../TabBar/TabBar'
import { Copyright } from '../Copyright/copyright'

const Layout = () => {
  return (
    <div className="App">
      <MenuBar />
      <TabBar />
      <Copyright />
      <div className="page">

        <Outlet />
      </div>
      
    </div>
  )
}

export default Layout
