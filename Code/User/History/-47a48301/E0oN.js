import { Component, useState } from "react";

class Comment extends Component{
    constructor(likes){
        super()
        [this.likes, setLikes] = useState(likes)
    }

    render(){
        return (
            <div className="comment">
                <h2>{cTemplate.title}</h2>
                <p>{cTemplate.likes}</p>
                <button className="likeBtn" onClick={cTemplate.toggleLike}>LIKE</button>
            </div>
        );
    }
}

export default Comment;


