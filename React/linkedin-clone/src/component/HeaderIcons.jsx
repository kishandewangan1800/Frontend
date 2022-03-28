import React from 'react'
import './HeaderIcon.css'


function HeaderIcons({Icon, title, IconDown, image}) {
  return (
    <div className='header-icons'>
        {Icon && <Icon className='header-icon-all' />}
        {image && <img className='pro-image' src={image} alt='Profile'/>}
        <div><span className='icon-name'>{title}
        {IconDown && <IconDown className="icon-down"/>}
        </span></div>
       
    </div>
    
  )
}



export default HeaderIcons
