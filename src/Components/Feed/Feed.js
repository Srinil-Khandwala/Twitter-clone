import React, { useState, useEffect } from 'react';
//css
import './Feed.css';
//components
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
//db
import db from '../../firebase';

import FlipMove from 'react-flip-move';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timeStamp')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2> Home</h2>
        <StarOutlineIcon className='feed__headerStarIcon' />
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            tweetDate={post.tweetDate}
            tweetTime={post.tweetTime}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
