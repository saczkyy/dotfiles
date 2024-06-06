import { useState } from 'react';

class Comment extends React.Component{
    constructor(props){
        this.title = props.title;
        const [likes, setLikes] = useState(props.likes)
        const [isLiked, setLikeButton] = useState(true)
    }
    

    render(){
        <div className="comment">
            
        </div>
    }
}

