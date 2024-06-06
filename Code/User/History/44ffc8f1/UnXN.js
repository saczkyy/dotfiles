import logo from './logo.svg';
import './App.css';

function App() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title"></h1>
        <form action={handleSubmit}></form>
      </div>
    </div>
  );
}

export default App;
