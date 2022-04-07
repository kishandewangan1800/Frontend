import React from 'react'

function TheirMessage({ message, lastMessage }) {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    // if (message?.attachments?.length > 0) {
    //     return (
    //         <img
    //             src={message.attachments[0].file}
    //             alt='message-attachments'
    //             className='message-image'
    //             style={{ float: 'left' }}
    //         />
    //     )
    // }

    return (
        <div className='message-row'>
            {isFirstMessageByUser && <div
                className='message-avatar'
                style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
            />}

            {
                (message?.attachments?.length > 0)
                    ? (
                        <img
                            src={message.attachments[0].file}
                            alt='message-attachments'
                            className='message-image'
                            style={{ marginLeft: isFirstMessageByUser ? '4px' :'48px',float: 'left'  }}
                        />
                    )
                    : (
                        <div className="message" style={{ float: 'left' , backgroundColor: '#cabcdc', marginLeft: isFirstMessageByUser ? '4px' :'48px' }}>
                            {message.text}
                        </div>
                    )

            }
        </div>
    )
}

export default TheirMessage