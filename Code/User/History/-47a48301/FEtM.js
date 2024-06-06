export class cTemplate{
    title = "";
    likes = 0;
    isLiked = false
    constructor(title, likes, isLiked){
        this.title = title
        this.likes = likes
        this.isLiked = isLiked
    }
    toggleLike(){
        this.isLiked ? dislike() : like() 
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
function Comment({cTemplate}){
    
    return (
        <div className="comment">
            <h2>{cTemplate.title}</h2>
            <p>{cTemplate.likes}</p>
            <button className="likeBtn" onClick={cTemplate.toggleLike}>LIKE</button>
        </div>
    );
}

export default Comment;


