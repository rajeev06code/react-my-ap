import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from '../../assets/2.jpg'
import {
  Link
} from "react-router-dom";


function Topbar() {
    return (
        <div className='topbarContainer'>
        <div className="wrapper">
        <div className="topbarLeft">   
        <Link to="/">
        <span className="logo">Friend<span className="logo2">Zone</span> </span>
        </Link>
        
          
          </div>
          <div className="topbarCenter">
              <div className="searchbar">
              <SearchIcon className="searchIcon"/>
              <input type="text" placeholder='search for friends, photos, posts...' className="searchInput" />
              </div>
         </div>
          <div className="topbarRight">
              <div className="topbarLinks">
                  <Link to='/' className="topbarLink">Home</Link>
                  <Link to='/profile' className="topbarLink">Timeline</Link>
                  <Link to='/login' className="topbarLink">Sign-In</Link>
              </div>
              <div className="topbarIcons">
              <Badge badgeContent={4} color="error">
                <PersonIcon />
              </Badge>
              <Badge badgeContent={1} color="error" >
                <ChatIcon />
              </Badge>
              <Badge badgeContent={9} color="error">
                <NotificationsIcon />
              </Badge>
                 
              </div>
              <div className="topbarImgDiv">
              <img src={profile} alt="profile" className="topbarImg" />
              </div>
            
          </div>

        </div>
     
            
        </div>
    )
}

export default Topbar
