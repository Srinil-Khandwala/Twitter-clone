import React from 'react';
//css
import './Post.css';
//verified icon
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import { Avatar } from '@material-ui/core';
import { forwardRef } from 'react';

const Post = forwardRef(
  (
    {
      avatar,
      text,
      image,
      username,
      displayName,
      verified,
      tweetDate,
      tweetTime,
    },
    ref
  ) => {
    return (
      <div className='post' ref={ref}>
        <div className='post__avatar'>
          <Avatar src={avatar} className='avatar' />
        </div>
        <div className='post__body'>
          <div className='post__header'>
            <div className='post__headerText'>
              <h3>
                {displayName}
                <span className='post__headerSpecial'>
                  {verified && <VerifiedUserIcon className='post__badge' />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className='post__headerDescription'>
              <p>{text}</p>
            </div>
          </div>
          {image && <img src={image} alt='' />}

          <div className='post__footer'>
            <div className='post__tweetTime'>
              <p>
                {tweetTime}, {tweetDate}
              </p>
            </div>
            <div className='post__footerIcons'>
              <ChatBubbleOutlineIcon fontSize='small' />
              <RepeatIcon fontSize='small' />
              <FavoriteBorderIcon fontSize='small' />
              <PublishIcon fontSize='small' />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
