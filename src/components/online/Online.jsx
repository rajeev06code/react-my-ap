import React from 'react'
import './online.css'
function Online({users}) {
    console.log(users)
    return (
        <div className="onlineCont">
               <div className="contImg">
               {/* <div className="imgCon"> */}
                <img src={users.profilePicture} alt="" className="onlineFriends"/>
               <span className="onlineIndicator"></span> 
               </div> 
               {/* </div> */}
                <span className="rightBarList">{users.username}</span> 
        </div>
    )
}

export default Online
