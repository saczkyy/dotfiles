import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Simple CRUD Application</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/create" element={<Add></Add>}></Route>
          <Route path="/edit" element={<Add></Add>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
