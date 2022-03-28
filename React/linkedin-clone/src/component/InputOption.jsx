import React from 'react'
import './InputOption.css'

function InputOption({Icon,title,color}) {
  return (
    <div className='input-option-main'>
      <Icon style={{color:color}} />
        <span className='input-type'>{title}</span>
        
    </div>
  )
}

export default InputOption