import React, { useState, useEffect } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine';
import './MessageForm.css'


function MessageForm(props) {

    const [value, setValue] = useState('');
    const {chatId, creds} = props;

  


    const handleSubmit = (e) =>{
        e.preventDefault();
      const text = value.trim();
      if(text.length>0){
          sendMessage(creds,chatId,{text})
          document.querySelector('.message-input').value = '';
          e.target.value ='';
          }

    }

    const handleChange = (e) =>{
        setValue(e.target.value);
        isTyping(props, chatId)
    }

  return (

    <form className='message-form' onSubmit={handleSubmit}>
        <input type="text"  className='message-input' placeholder='Send a message' value={value} onChange={handleChange} onSubmit={handleSubmit}/>

    </form>
  )
}

export default MessageForm