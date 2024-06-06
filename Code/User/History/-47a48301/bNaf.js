import { useState } from "react";

function Comment() {
    return (
        <div className="comment">
            <h2>{cTemplate.title}</h2>
            <p>{cTemplate.likes}</p>
            <button className="likeBtn" onClick={cTemplate.toggleLike}>LIKE</button>
        </div>
    );
}

export default Comment;


