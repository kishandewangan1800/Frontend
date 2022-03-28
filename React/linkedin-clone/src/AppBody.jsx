import React from 'react'
import SideBar from './component/SideBar'
import Feed from './component/Feed'
import Widgets from './component/Widgets'
import './AppBody.css'

function AppBody() {
  return (
    <div className='app-body'>
        {/* SideBar */}
        
        <SideBar />

        {/* Feed */}

        <Feed />

        {/* Widgets */} 

        <Widgets />


    </div>
  )
}

export default AppBody