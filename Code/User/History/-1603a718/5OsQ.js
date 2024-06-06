import './App.css';
import Comment, {cTemplate} from './components/comment'

function App() {
  let comments = [new cTemplate('halo1', 2, false)]
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
