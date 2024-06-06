import { useRef } from 'react';
import './App.css';

import RadioPanel from './components/radioPanel';

function App() {
  const rbs = useRef()
  const buttons = ['Pocztówka', 'List', "Paczka"]

  const onSubmit = e => {
    e.preventDefault() 
    console.log(rbs.current.getCurrent())
    
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <RadioPanel Buttons={buttons} GroupName={'przesylki'} ref={rbs}/>

        <button type="submit">asdasd</button>
      </form>
    </div>
  );
}

export default App;
