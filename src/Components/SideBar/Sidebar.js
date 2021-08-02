import React from 'react';
//css
import './Sidebar.css';
//sidebarOption
import SidebarOption from '../SideBarOption/SidebarOption';
//icons
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Twitter icon */}
      <TwitterIcon className='sidebar__twitterIcon' />
      {/* Sidebar option */}
      <SidebarOption active text='Home' Icon={HomeIcon} />
      <SidebarOption text='Explore' Icon={SearchIcon} />
      <SidebarOption text='Notification' Icon={NotificationsNoneIcon} />
      <SidebarOption text='Message' Icon={MailOutlineIcon} />
      <SidebarOption text='Bookmark' Icon={BookmarkBorderIcon} />
      <SidebarOption text='List' Icon={ListAltIcon} />
      <SidebarOption text='Profile' Icon={PermIdentityIcon} />
      <SidebarOption text='More' Icon={MoreHorizIcon} />
      {/* tweet button */}
      <Button className='sidebar__tweet' variant='outlined' fullWidth>
        <h3>Tweet</h3>
      </Button>
    </div>
  );
};

export default Sidebar;
