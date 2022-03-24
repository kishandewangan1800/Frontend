import React  from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import CottageIcon from '@mui/icons-material/Cottage';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HeaderIcons from './component/HeaderIcons';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import WorkIcon from '@mui/icons-material/Work';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function Header() {
  return (
    <div className='header'>
      <div className="left-header">
        <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" className='linkedin-icon' alt="icon" />

        <div className="search-header">
        <SearchIcon className='search-icon' />
          <input type="text" name="search" id="search" placeholder='Search for people, job, and more' className='search'/>
        </div>

      </div>

      <div className="right-header">
        <HeaderIcons Icon={CottageIcon} title='Home' />
        <HeaderIcons Icon={PeopleAltIcon} title='My Network' />
        <HeaderIcons Icon={BusinessCenterIcon} title='Job' />
        <HeaderIcons Icon={MessageIcon} title='Messaging' />
        <HeaderIcons Icon={CircleNotificationsIcon} title='Notification' />
        <div className='my-picture'><img src="https://media-exp1.licdn.com/dms/image/C4D03AQGpVgI75IYw5Q/profile-displayphoto-shrink_800_800/0/1643054655690?e=1653523200&v=beta&t=68iGFg5fGcY9WX1EQ1a0Yw1k11IFalh856yowzLro4A" alt="Profile" className='prifile-img' /> <div><span style={{fontSize:'12px', margin:0}}>Me</span></div></div>
        <HeaderIcons Icon={GridViewRoundedIcon} IconDown={ArrowDropDownIcon} title='Work' /> 
        <HeaderIcons Icon={WorkIcon} title='Post Job' />
      </div>
    </div>
  )
}

export default Header