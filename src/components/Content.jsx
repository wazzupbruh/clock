import React from 'react'
import './Content.css'

const Content = () => {
    return( 
        <div className = 'content'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pokai_Bucht_auf_Oahu.jpg/1200px-Pokai_Bucht_auf_Oahu.jpg' alt='just a bitch'></img>  
            <div className = 'info'>
            <div>Avatar + Description</div>
                <div>
                    <div>My Post</div>
                    <div>
                        <div>New Post
                            <div>Post 1</div>
                            <div>Post 2</div>
                        </div>
                    </div>
                </div>
             </div>
       </div>
    );
}

export default Content;