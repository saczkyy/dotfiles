import { useRef } from 'react';
import './App.css';

import RadioPanel from './components/radioPanel';

function App() {
  const rbs = useRef()
  const buttons = ['Pocztówka', 'List', "Paczka"]

  return (
    <div className="App">
      <form action="">
        <RadioPanel Buttons={buttons} GroupName={'przesylki'} ref={rbs}/>


      </form>
    </div>
  );
}

export default App;
