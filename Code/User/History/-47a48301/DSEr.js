import { useState } from "react";

function Comment(props) {
    const [likes, setLikes] = useState(props.likes)
    const [isLiked, setIsLiked] = useState(props.isLiked)
    const [btnName, setBtnName] = useState("LIKE")
    let title = props.title


    const toggleLike = () => {
        isLiked ? setLikes(likes -1) : setLikes(likes + 1)
        isLiked ? setBtnName("LIKE") : setBtnName("DISLIKE")
        setIsLiked(!isLiked)
    }

    return (
        <div className="comment">
            <div>
                <h2>{title}</h2>
                <p>{likes}</p>
            </div>
            <button className="likeBtn" onClick={toggleLike}>{btnName}</button>
        </div>
    );
}

export default Comment;

