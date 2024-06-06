class cTemplate{
    constructor(title, likes = 0, isLiked = false){
        this.title = title
        this.likes = likes
        this.isLiked = isLiked
    }
}
function Comment({cTemplate}){
    return (
        <div className="comment">
            <h2>{cTemplate.title}</h2>
            <p>{cTemplate.likes}</p>
            <button className="likeBtn"></button>
        </div>
    );
}

export default Comment;


