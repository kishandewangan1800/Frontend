import React from 'react'
import './HeaderIcon.css'


function HeaderIcons({Icon, title, IconDown}) {
  return (
    <div className='header-icons'>
        {Icon && <Icon className='header-icon-all' />}
        <div><span className='icon-name'>{title}
        {IconDown && <IconDown />}
        
        </span></div>
       
    </div>
    
  )
}



export default HeaderIcons
