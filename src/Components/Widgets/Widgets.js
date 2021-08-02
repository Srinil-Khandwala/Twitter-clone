import React from 'react';
//css
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
//tweeter tweet embed
import { TwitterTweetEmbed, TwitterShareButton } from 'react-twitter-embed';

const Widgets = () => {
  const screen_name = 'srinilll';

  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon />
        <input type='text' placeholder='Search Twitter' />
      </div>
      <div className='widgets__widgetContainer'>
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={'1383677342594191360'} />
        <a
          className='twitter-timeline'
          data-width='1200'
          href='https://twitter.com/srinilll?ref_src=twsrc%5Etfw'
        >
          Tweets by srinilll
        </a>{' '}
        <script
          async
          src='//platform.twitter.com/widgets.js'
          charset='utf-8'
        ></script>
        <TwitterShareButton
          url={'https://twitter.com/srinilll'}
          options={{ text: 'Twitter is awesome!!', via: 'srinilll' }}
        />
      </div>
    </div>
  );
};

export default Widgets;
