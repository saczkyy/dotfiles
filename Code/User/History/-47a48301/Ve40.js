import { Component } from "react";

export class CTemplate{
    title = "";
    likes = 0;
    isLiked = false
    constructor(title, likes, isLiked){
        this.title = title
        this.likes = likes
        this.isLiked = isLiked
    }
    
    toggleLike(){
        console.log('asdasd')
        this.isLiked ? this.dislike() : this.like() 
    }

    like(){
        this.likes++
        this.isLiked = true
    }
    dislike(){
        this.likes--
        this.isLiked = false
    }
}

class Comment extends Component{
    
    render(){
        return (
            <div className="comment">
                <h2>{this.props.cTemplate.title}</h2>
                <p>{this.props.cTemplate.likes}</p>
                <button className="likeBtn" onClick={this.props.cTemplate.toggleLike}>LIKE</button>
            </div>
        );
    }
}

export default Comment;


