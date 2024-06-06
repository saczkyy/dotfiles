import './App.css';
import Comment from './components/comment'

function App() {
  let comments = [new Comment('halo1', 2, true),{title:"halo2", likes:1},{title:"halo3", likes:7},{title:"halo4", likes:12},{title:"halo5", likes:0},]
  return (
    <div className="App">
      <section className="wrapper">
        {comments.map(a => {
          return (
            {a}
          )
        })}
      </section>
    </div>
  );
}

export default App;
