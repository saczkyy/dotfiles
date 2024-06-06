import './App.css';
import Comment from './components/comment'

function App() {
  comments = [{title:"halo1", likes:10},{title:"halo2", likes:1},{title:"halo3", likes:7},{title:"halo4", likes:12},{title:"halo5", likes:0},]
  return (
    <div className="App">
      <section className="wrapper">
        {comments.map((title, likes) => {
          return (
            <Comment title={title} likes={likes}/>
          )
        })}


      </section>
    </div>
  );
}

export default App;
