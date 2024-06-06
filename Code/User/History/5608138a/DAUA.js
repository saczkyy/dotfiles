import { useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'


function Location({setLocation, getData}){
    const inputReference = useRef()
    const giveFocus = (e) => {
        if(inputReference.current){ 
            inputReference.current.focus()
        }
    }
    const setLoc = (e) => {
        setLocation(e.target.value)
        console.log(e.target.value)
    }
    const getD = (e) => {
        console.log(e.target.value)
        console.log(e.key)
        if (e.key == "Enter"){
            getData()
            inputReference.current.innerText = ''
        }
    }
    return (
        <div onClick={giveFocus}>
          <FontAwesomeIcon id="locationIcon" icon={faCompass}></FontAwesomeIcon>
          <input type="text" id="location" ref={inputReference} onKeyDown={getD} onChange={setLoc}/>
        </div>
    )
}

export default Location
