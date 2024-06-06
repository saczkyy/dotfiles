import { useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'

function Location(){
    const inputReference = useRef()
    const giveFocus = (e) => {
        console.log("galos");
        if(inputReference.current){ 
            inputReference.current.focus()
            console.log(inputReference.current); 
        }
    }

    return (
        <div onClick={giveFocus}>
          <FontAwesomeIcon id="locationIcon" icon={faCompass}></FontAwesomeIcon>
          <input type="text" id="location" ref={inputReference}/>
        </div>
    )
}

export default Location
