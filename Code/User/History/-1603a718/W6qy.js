import './App.css';
import './components/comment'

function App() {
  return (
    <div className="App">
      <Comment 
      comment={Comment('halo')} />
    </div>
  );
}

export default App;
