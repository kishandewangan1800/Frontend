import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({ color, size, text, borderRadius}) => {

  const {currentColor} = useStateContext();

  return (
    <button 
    type='button'
    style={{backgroundColor:currentColor, color:color, borderRadius:borderRadius}}
    className={`text-${size} hover:drop-shadow-xl p-3`}
    >
      {text}
    </button>
  )
}

export default Button