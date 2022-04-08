import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'
import InputOption from './InputOption'
import './Feed.css'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotesIcon from '@mui/icons-material/Notes';
import Post from './Post';
// import { db } from './firebase';

function Feed() {
  const [posts, setposts] = useState([]);
 

  // useEffect(()=>{
  //   db.collection('posts').onSnapshot()
  // },[]);

  const sendPost = (e) => {
    e.preventDefault();

  };

  return (
    <div className='feed'>
      <div className="feed-post">
        <form onSubmit={sendPost}>
          <div className='feed-avatar'><Avatar />
            <input type="text" name="post-content" id="post-content" placeholder='Start a Post' className='post-content' />
            <input type="submit" value="submit"  className='post-submit'/>
          </div>
        </form>

        <div className="input-option">
          <InputOption Icon={AddToPhotosIcon} title='Photo' color='blue' />
          <InputOption Icon={VideoLibraryIcon} title='Video' color='green' />
          <InputOption Icon={BusinessCenterIcon} title='Job' color='skyblue' />
          <InputOption Icon={NotesIcon} title='Write' color='coral' />

        </div>
      </div>

      <div className="feed-all-post">
        <Post />
      </div>

    </div>
  )
}

export default Feed