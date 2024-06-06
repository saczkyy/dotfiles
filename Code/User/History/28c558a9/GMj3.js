import './App.css';
import {Comment} from './components/comment.js';

function App() {
  const comments = [{'likes':4,'title':'jeden'},{'likes':12,'title':'dwa'},{'likes':0,'title':'trzy'}];
  return (
    <div className="App">
      <div className="wrapper">

        <div className="commentList">
          {comments.forEach(element => {
            <Comment title={this.title} likes={this.likes}></Comment>
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
