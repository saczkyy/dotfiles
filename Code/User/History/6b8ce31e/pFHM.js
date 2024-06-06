import { useState } from 'react';

function Comment(props){
    title = props.title;
    const [likes, setLikes] = useState(props.likes)
    const [isLiked, setLikeButton] = useState(true)

    return (
        <p>{title} {likes}</p>
    )
}

export default Comment;