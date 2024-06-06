import './App.css';
import './components/comment'

function App() {
  return (
    <div className="App">
      <Comment 
      comment={CommentTemplate('halo')} />
    </div>
  );
}

export default App;
