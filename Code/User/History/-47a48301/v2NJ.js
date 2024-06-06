export class CTemplate{
    title = "";
    likes = 0;
    isLiked = false
    constructor(title, likes, isLiked){
        this.title = title
        this.likes = likes
        this.isLiked = isLiked
    }
    toggleLike(){
        console.log('asdasd')
        // this.isLiked ? this.dislike() : this.like() 
        if (this.isLiked){
            this.dislike()
        } else {
            this.like()
        }
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
    cTemplate.toggleLike()
    return (
        <div className="comment">
            <h2>{cTemplate.title}</h2>
            <p>{cTemplate.likes}</p>
            <button className="likeBtn" >LIKE</button>
        </div>
    );
}

export default Comment;


