import logo from './logo.svg';
import './App.css';
import './const/data'

function App() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson.email);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">
          Logowanie
        </h1>

        <form onSubmit={handleSubmit}>
          <label>
            <p>Podaj e-mail</p>
          </label>
          <input type="text" name='email' placeholder='email' />

          <label>
            <p>Podaj hasło</p>
          </label>
          <input type="password" name='password' placeholder='hasło' />

          <button type="submit">ZATWIERDŹ</button>
          <p className="komunikat"></p>

        </form>
      </div>
    </div>
  );
}

export default App;