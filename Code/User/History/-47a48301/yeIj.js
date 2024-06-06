export class cTemplate{
    constructor(title, likes = 0, isLiked = false){
        this.title = title
        this.likes = likes
        this.isLiked = isLiked
    }
    toggleLike(){
        this.isLiked ? this.like() : this.dislike() 
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
            <button className="likeBtn" onClick={toggleLike}></button>
        </div>
    );
}

export default Comment;


