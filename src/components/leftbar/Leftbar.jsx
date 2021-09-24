import React from 'react'
import './leftbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

function Leftbar() {
    return (
        <div className='leftbarContainer'>
            <div className="leftbarWrapper">
                <ul className="leftbarUl">
                    <li className="leftbarList">
                       <RssFeedIcon className='leftbarIcons'/>  
                       <span className="leftbart">Feeds</span>   
                    </li>
                    <li className="leftbarList">
                       <ChatIcon className='leftbarIcons'/>  
                       <span className="leftbart">Chats</span>   
                    </li>
                    <li className="leftbarList">
                       <PlayCircleFilledWhiteOutlinedIcon className='leftbarIcons'/>  
                       <span className="leftbart">Videos</span>   
                    </li>
                    <li className="leftbarList">
                       <GroupIcon className='leftbarIcons'/>  
                       <span className="leftbart">Groups</span>   
                    </li>
                    <li className="leftbarList">
                       <BookmarkIcon className='leftbarIcons'/>  
                       <span className="leftbart">Bookmarks</span>   
                    </li>
                    <li className="leftbarList">
                       <HelpOutlineIcon className='leftbarIcons'/>  
                       <span className="leftbart">Questions</span>   
                    </li>
                    <li className="leftbarList">
                       <WorkOutlineIcon className='leftbarIcons'/>  
                       <span className="leftbart">Jobs</span>   
                    </li>
                    <li className="leftbarList">
                       <EventIcon className='leftbarIcons'/>  
                       <span className="leftbart">Events</span>   
                    </li>
                    <li className="leftbarList">
                       <SchoolIcon className='leftbarIcons'/>  
                       <span className="leftbart">Courses</span>   
                    </li>
                </ul>
                <button className="leftButton">Show More</button>
                <hr className="leftHr" />
                <ul className="leftFriends">
                    <li className="leftFriendslist">
                        <img src="../../assets/1.jpg" alt="" className="leftFriendsImg" />
                        <span className="left">Brijesh</span>
                    </li>
                    <li className="leftFriendslist">
                        <img src="../../assets/1.jpg" alt="" className="leftFriendsImg" />
                        <span className="left">Brijesh</span>
                    </li>
                    <li className="leftFriendslist">
                        <img src="../../assets/1.jpg" alt="" className="leftFriendsImg" />
                        <span className="left">Brijesh</span>
                    </li>
                   
                </ul>
            </div>
        </div>
    )
}

export default Leftbar
