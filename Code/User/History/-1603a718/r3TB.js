import './App.css';
import Comment from './components/comment'

function App() {
  let comments = [{title:"halo", likes:10, isLiked:false},{title:"halo", likes:10, isLiked:false},{title:"halo", likes:10, isLiked:false},{title:"halo", likes:10, isLiked:false},{title:"halo", likes:10, isLiked:false}]
  return (
    <div className="App">
      <section className="wrapper">
        {comments.map(comment => {
          return (
            <Comment title={comment.title} likes={comment.likes} isLiked={comment.isLiked}/>
          );
        })}
      </section>
    </div>
  );
}

export default App;
