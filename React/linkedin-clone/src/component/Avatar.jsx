import React from 'react'
import './Avatar.css'

function Avatar({image}) {
  return (


    <span className='avatar-div'>
      {
        image ? <img className='avatar-image' src={image} alt="avatar" /> : <img className='avatar-image' src="https://media-exp1.licdn.com/dms/image/C4D03AQGpVgI75IYw5Q/profile-displayphoto-shrink_800_800/0/1643054655690?e=1653523200&v=beta&t=68iGFg5fGcY9WX1EQ1a0Yw1k11IFalh856yowzLro4A" alt="avatar" /> 
  }
     

    </span>


    
        
   
  )
}

export default Avatar