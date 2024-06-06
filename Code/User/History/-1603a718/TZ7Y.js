import './App.css';
import Comment from './components/comment'

function App() {
  let comments = [{title:"halo1", likes:10, isLiked:true}]
  return (
    <div className="App">
      <section className="wrapper">
        {comments.map(a => {
          return (
            <Comment title={a.title} likes={a.likes} isLiked={a.isLiked}/>
          );
        })}
      </section>
    </div>
  );
}

export default App;
