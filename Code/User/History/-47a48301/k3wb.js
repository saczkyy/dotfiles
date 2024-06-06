import { useState } from "react";

function Comment(title, like, isLike) {
    const [likes, setLikes] = useState(like)
    const [isLiked, setIsLiked] = useState(isLike)
    let title = title

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


