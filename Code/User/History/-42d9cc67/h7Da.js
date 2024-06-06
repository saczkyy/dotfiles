import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

    const[formData, setFormData] = useState({ title: '', genre: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        console.log(`tytul: ${ formData.title }; rodzaj: ${ formData.genre }`);
    };

  return (
      <div className="container">
          <div className="row">
              <div className="col-md-6 offset-md-3">
                  <form>
                      <div className="mb-3">
                          <label htmlFor="titleInput" className="form-label">Tytuł filmu</label>
                          <input type="text" className="form-control" id="titleInput" name="title" value={formData.title} onChange={handleChange} />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="genreSelect" className="form-label">Rodzaj</label>
                          <select className="form-select" id="genreSelect" name="genre" value={formData.genre} onChange={handleChange}>
                              <option value="">---</option>
                              <option value="Komedia">Komedia</option>
                              <option value="Obyczajowy">Obyczajowy</option>
                              <option value="Sensacyjny">Sensacyjny</option>
                              <option value="Horror ">Horror</option>
                          </select>
                      </div>
                      <button type="button" className="btn btn-primary" onClick={handleAdd}>Dodaj</button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App;
