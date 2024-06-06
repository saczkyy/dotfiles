import './App.css';
import Comment from './components/comment'

function App() {
  let comments = [{title:"halo1", likes:10, isLiked:false}]
  return (
    <div className="App">
      <section className="wrapper">
        {comments.map((title, likes, isliked) => {
          return (
            <Comment title={title} likes={likes} isLiked={isliked}/>
          );
        })}
      </section>
    </div>
  );
}

export default App;
