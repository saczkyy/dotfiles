import { useState } from "react";

function Comment(props) {
    console.log(props.likes)
    const [likes, setLikes] = useState(props.likes)
    const [isLiked, setIsLiked] = useState(props.isLiked)
    let title = props.title

    const toggleLike = () => {
        isLiked ? setLikes(likes--) : setLikes(likes++)
    }

    return (
        <div className="comment">
            <h2>{title}</h2>
            <p>{likes}</p>
            <button className="likeBtn" onClick={toggleLike}>LIKE</button>
        </div>
    );
}

export default Comment;


