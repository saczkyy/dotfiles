import { useState } from "react";

function Comment(likes, isLiked) {
    const [likes, setLikes] = useState(likes)
    const [isLiked, setIsLiked] = useState(isLiked)

    return (
        <div className="comment">
            <h2>{cTemplate.title}</h2>
            <p>{cTemplate.likes}</p>
            <button className="likeBtn" onClick={cTemplate.toggleLike}>LIKE</button>
        </div>
    );
}

export default Comment;


