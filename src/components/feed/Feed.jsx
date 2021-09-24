import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import {Posts} from '../../dummyData.js';
import './feed.css'
function Feed() {
    return (
        <div  className='feedContainer'>
            <div className="feedWrapper">
                <Share/>
                {
                    Posts.map(p=>{
                        return <Post key={p.id} posts={p}/> 
                    })
                }
              
              
            </div>
        </div>
    )
}

export default Feed
