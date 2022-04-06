import React from 'react'

function MyMessage({message}) {

    if(message?.attachment?.length>0){
        return(
            <img 
            src={message.attachment[0].file}
            alt='message-attachment'
            className='message-image'
            style={{float:'right'}}
            />
        )
    }


  return (
    <div className="message" style={{float:'right', marginRight:'18px', color:'white', backgroundColor:'#3b2a50'}}>
        {/* {message.text.substr(3, message.text.length-7)} */}
        {message.text}
        
    </div>
  )
}

export default MyMessage