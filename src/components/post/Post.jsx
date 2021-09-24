import React from 'react'
import {useState} from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData';
function Post({posts}) {
 const[like,setLike]=useState(posts.like) 
 const[isLiked,setIsLiked]=useState(false)

 const likeHandler=()=>{
     setLike(isLiked?like-1 : like+1)
     setIsLiked(!isLiked)
 }
const user =Users.filter(u=>u.id===posts.userId)
console.log(user)
const userName=user[0].username;
const userImage=user[0].profilePicture;



    return (
        <div className='feedPost'>
    <div className="postwrapper">
        <div className="postTop">
     <div className="postTopLeft">
         {/* <img src="../../assets/2.jpg" alt="" className='postUserImg'/> */}
         <img src={userImage} alt="" className='postUserImg'/>
         <span className="postUser">{userName}</span>
         <span className="postTime">{posts.date}</span>
     </div>
     <div className="postTopRight">
   <MoreVertIcon/>
     </div>
        </div>
        <div className="postCenter">
    <span className="postText">{posts.desc}</span>
    <img src={posts.photo} alt="" className="postImg"/>
        </div>
        <div className="postBottom">
   <div className="postBottomLeft">
       <img src="../../assets/heart.png" alt="" className='postHeart' onClick={likeHandler} />
       <img src="../../assets/like.png" alt="" className='postLike' onClick={likeHandler}/>
       <span className="likeCounter">{like} people liked it</span>
   </div>
   <div className="postBottomRight">
       <span className="postCommentCount">{posts.comment} Comments</span>
   </div>
        </div>
    </div>
        </div>
    )
}

export default Post
