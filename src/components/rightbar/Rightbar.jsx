import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData';
import Online from '../online/Online'
import Profile from '../../page/profile/Profile'
const HomeRightBar=()=>{
    return(
        <>
    <div className="bdayContainer">
                 <img src="../../assets/gift.png" alt="" className='bdayImg' />
                 <span className="bdayText">
                     <b>Deepak Gautam</b> and<b> 3 others</b>  have birthday today.
                 </span>
             </div>

             <img src="../../assets/pexels-min-an-853168.jpg" alt="" className='rightBarAd'/>
          <div className="rightBarFriends">
          <h2 className="onlineText">Online friends</h2>
              <ul className="rightBarFriendsList">
{
  Users.map((u)=>(
      <Online key={u.id} users={u}/>
  ))  
}
            
              </ul>
          
            
         
              
          </div>
        </>
    )
}
const ProfileRightBar=()=>{
    return(
        <>
      <h4 className="rightBarTitle">User Information</h4>
      <div className="rightBarInfo">
          <div className="rightBarInfoItems">
              <span className="rightBarInfoKey">City:</span>
              <span className="rightBarInfoValue">Gorakhpur</span>
          </div>
          <div className="rightBarInfoItems">
              <span className="rightBarInfoKey">From:</span>
              <span className="rightBarInfoValue">India</span>
          </div>
          <div className="rightBarInfoItems">
              <span className="rightBarInfoKey">Relationship:</span>
              <span className="rightBarInfoValue">Single</span>
          </div>
      </div>
      <h4 className="rightBarTitle">User friends</h4>
      <div className="rightBarFollowings">
          <div className="rightBarFollowing">
              <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingsImg" />
              <span className="rightBarFollowingsName">Ramesh</span>
          </div>
          <div className="rightBarFollowing">
              <img src="assets/person/2.jpeg" alt="" className="rightBarFollowingsImg" />
              <span className="rightBarFollowingsName">Ramesh</span>
          </div>
          <div className="rightBarFollowing">
              <img src="assets/person/9.jpeg" alt="" className="rightBarFollowingsImg" />
              <span className="rightBarFollowingsName">Ramesh</span>
          </div>
          <div className="rightBarFollowing">
              <img src="assets/person/4.jpeg" alt="" className="rightBarFollowingsImg" />
              <span className="rightBarFollowingsName">Ramesh</span>
          </div>
          <div className="rightBarFollowing">
              <img src="assets/person/6.jpeg" alt="" className="rightBarFollowingsImg" />
              <span className="rightBarFollowingsName">Ramesh</span>
          </div>
          <div className="rightBarFollowing">
              <img src="assets/person/8.jpeg" alt="" className="rightBarFollowingsImg" />
              <span className="rightBarFollowingsName">Ramesh</span>
          </div>
          <div className="rightBarFollowing">
              <img src="assets/person/7.jpeg" alt="" className="rightBarFollowingsImg" />
              <span className="rightBarFollowingsName">Ramesh</span>
          </div>
      </div>
        </>
    )
}


function Rightbar({profile}) {
    return (
        <div  className='rightbarContainer'>
         <div className="rightBarWrapper">
   {
    profile ? <ProfileRightBar/>:<HomeRightBar/>
   }    
   
         </div>
        </div>
    )
}

export default Rightbar
