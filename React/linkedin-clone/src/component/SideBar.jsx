import React from 'react'
import './SideBar.css'
import Avatar from './Avatar'
import Background from './Background'
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Recent from './Recent';

function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-top">
        <Background className='sidebar-background' />
        <div className="sidebar-avatar">  <Avatar  /> </div>
       
        <h3 className="sidebar-name">Kishan Dewangan</h3>
        <p className="sidebar-detail">Learning Full-stack Development at Acciojob</p>
        <hr />
        <p className='sidebar-para'> <span> Who viewed your profile</span> <span className='number'>350</span></p>
        <p className='sidebar-para'> <span>Views of your post</span> <span className='number'>250</span></p>
        <hr />
        <p className='sidebar-para'>Access exclusive tools and insights
          Learn New Skills, Try Premium Free
        </p>
        <hr />
        <p className='sidebar-para'> <span> <BookmarksIcon style={{ fontSize: 'small', color: '#666' }} /> My items</span></p>

      </div>

      <div className="sidebar-mid">
        <h3>my Pages(2)</h3>
        <p className='sidebar-para'>
          Kushabhau Thakre University
        </p>
        <p className='sidebar-para'>
          City Blood Bank
        </p>


      </div>

      <div className="sidebar-end">
        <Recent  className='sidebar-recent'/>

      </div>

    </div>
  )
}

export default SideBar