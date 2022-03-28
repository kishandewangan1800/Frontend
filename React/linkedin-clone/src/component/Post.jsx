import React from 'react'
import InputOption from './InputOption'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';
import SendIcon from '@mui/icons-material/Send';
import dataMain from './maindata';
import Avatar from './Avatar';
import './Post.css'


function Post() {

    return (
        <div >
            {
                dataMain.map((item, index) => {
                    return (
                        <div className="post" key={index}>
                            {item.response && <div className='responsed-personalbar'> {item.respondName} {item.response} on this  <hr /></div>}
                           
                            <div className="avatar-name">
                                <Avatar image={item.avatar} />
                                <span className='name-post'>{item.name}
                                </span>
                            </div>

                            <div className="content">{item.content}
                                <div className="image-post">
                                    {item.postImage && <img className='post-image' src={item.postImage} alt="Post" />}
                                    
                                </div>
                            </div>

                            <div className="response">
                                <span className='left-response'>{item.reacted} Reacted</span>
                                <span className="right-response">
                                <span className='response-comments'>{item.comments} Comments</span>
                                <span className='response-share'>{item.share} Shares</span>
                                </span>

                            </div>
                            <hr />

                            <div className="post-reaction">
                                <InputOption Icon={ThumbUpOutlinedIcon} title='Like' />
                                <InputOption Icon={CommentOutlinedIcon} title='Comment' />
                                <InputOption Icon={ForwardOutlinedIcon} title='Share' />
                                <InputOption Icon={SendIcon} title='Send' />
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Post