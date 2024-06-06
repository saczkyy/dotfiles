import { useState } from 'react';

function Comment(props){
    this.title = props.title;
    const [likes, setLikes] = useState(props.likes)
    const [isLiked, setLikeButton] = useState(true)

    return (
        <p>{this.title} {this.likes}</p>
    )
}
