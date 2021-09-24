import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
function Share() {
    return (
        <div className='shareContainer'>
           <div className="shareWrapper">
               <div className="shareTop">
                   <img src="../../assets/2.jpg" alt="" className="shareImg"/>
                   <input type="text" placeholder="What's in your mind ?" className="shareInput"/>
               </div>
               <hr className="shareHr" />
               <div className="shareOptions">
                   <div className="shareOption">
                   <PermMediaIcon htmlColor='tomato' className="shareIcon"/>
                       <span className='sharePhoto'>Photo or Video</span>
                   </div>
                   <div className="shareOption">
                   <LabelIcon htmlColor='#034F84' className="shareIcon"/>
                       <span className='sharePhoto'>Tag</span>
                   </div>
                   <div className="shareOption">
                   <RoomIcon htmlColor='green' className="shareIcon"/>
                       <span className='sharePhoto'>Location</span>
                   </div>
                   <div className="shareOption">
                   <EmojiEmotionsIcon htmlColor='#ffb300' className="shareIcon"/>
                       <span className='sharePhoto'>Feelings</span>
                   </div>
                   <button className='shareButton' >Share</button>
               </div>
             
           </div>
        </div>
    )
}

export default Share
