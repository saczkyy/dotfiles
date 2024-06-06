import './App.css';
import Comment from './components/comment'

function App() {
  let comments = [new CTemplate('halo1', 2, false)]
  return (
    <div className="App">
      <section className="wrapper">
        {comments.map(a => {
          return (
            <Comment cTemplate={a}/>
          );
        })}
      </section>
    </div>
  );
}

export default App;
