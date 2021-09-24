import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
function Profile() {
    return (
        <>
            <Topbar/>
            <div className="ProfileContainer">
                <Leftbar/>
                <div className="profileRight">
                <div className="profileRightTop">
                <div className="profileDiv">
                <img src="https://images.pexels.com/photos/3752402/pexels-photo-3752402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='profileCoverImg' />
       <img src="../../assets/2.jpg" alt="" className='profilePic' />
       <div className="profileInfo">
            <h4 className="profileInfoName">Brijesh Gupta</h4>
            <span className="profileInfoDesc">Hello! my friends</span>
        </div>
                </div>
      
                </div>
                <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
                </div>
               
                </div>
                </div>
        </>
    )
}

export default Profile
