import './App.css';
import { useEffect, useRef, useState } from 'react';
import "@fontsource/rubik";
import axios from 'axios' 

import clear from './assets/clear.jpg' 
import clouds from './assets/scattered.jpg'
import darkclouds from './assets/dark_clouds.jpg' 
import rain from './assets/rain.jpg' 
import snow from './assets/snow.jpg' 
import mist from './assets/mist.jpg'
import thunder from './assets/thunder.webp'

import Location from './components/locationBar';
import MainInfo from './components/mainInfo';
import Details from './components/details';
import AdditionalInfo from './components/additional';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('Białystok')
  const [bg, setBg] = useState(clear)

  const lSearchRef = useRef(null)
  const openLSearch = (e) => {
    if (e.key === ' ') {e.preventDefault()}
    lSearchRef.current.focus()
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a7687fe74a2f227a2ff2727c3f8aebfe`
  
  useEffect(() => {
    getData()
    function handleKeydown(e){
      if (lSearchRef.current.getIsFocused()) {return}
      var x = e.key.charCodeAt(0)
      if ((x>= 97 && x <= 122) || e.key === " "){
        openLSearch(e)
      }
    }
    document.addEventListener('keydown', handleKeydown)

    const intervalId = setInterval(() => {
      if (!data.main) {return}
      setLocation(data)
      getData()
      console.log("interval: data update")
    }, (5 * 60 * 1000));

    return function cleanup() {
      document.removeEventListener('keydown', handleKeydown);
      clearInterval(intervalId);
    }
  }, []);


  const getData = (e) => {
    if (location === '') {return}
    axios.get(url).then((response) => {
      setData(response.data)
      switch (response.data.weather[0].main){
        case 'Clear':
          setBg(clear)
          break;
        case 'Clouds':
          setBg(clouds)
          break;
        case 'Mist':
          setBg(mist)
          break;
        case 'Drizzle':
          setBg(rain)
          break;
        case 'rain':
          setBg(rain)
          break;
        case 'Broken clouds':
          setBg(darkclouds)
          break;
        case 'Thunder':
          setBg(thunder)
          break;
        case 'Snow':
          setBg(snow)
          break
        default:
          setBg(clear)
          break
      } 
    })
    setLocation('')
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})`}}>
      <header>
        <Location setLocation={setLocation} getData={getData} ref={lSearchRef}/>
      </header>
      <section className="display">
        <MainInfo data={data} />
        <div id='container'>
          <Details data={data} />
          <AdditionalInfo data={data}/>
        </div>
      </section>

    </div>
  );
}

export default App;