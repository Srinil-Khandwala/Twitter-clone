import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import db from '../../firebase';
import './TweetBox.css';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();
    var date = new Date();

    var displayDate =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    var time = date.toLocaleTimeString();

    db.collection('posts').add({
      displayName: 'Srinil',
      username: 'srinilll',
      text: tweetMessage,
      verified: true,
      image: tweetImage,
      avatar:
        'https://pbs.twimg.com/profile_images/1414101562314694662/zLYM5XyL_400x400.jpg',
      timeStamp: 999999999999999999 - new Date().getTime(),
      tweetDate: displayDate,
      tweetTime: time,
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar
            src='https://pbs.twimg.com/profile_images/1414101562314694662/zLYM5XyL_400x400.jpg'
            className='avatar'
          />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.currentTarget.value)}
            type='text'
            placeholder="What's Happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.currentTarget.value)}
          value={tweetImage}
          className='tweetBox__imageInput'
          type='text'
          placeholder='Optional : Enter image URL'
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
