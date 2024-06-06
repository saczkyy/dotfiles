import { forwardRef, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'


forwardRef(function Location({setLocation, getData}, ref){
    const inputReference = useRef()
    const giveFocus = (e) => {
        if(inputReference.current){ 
            inputReference.current.focus()
        }
    }
    const setLoc = (e) => {
        setLocation(e.target.value)
    }
    const getD = (e) => {
        if (e.key == "Enter"){
            getData()
            inputReference.current.value = ''
            inputReference.current.blur()
        }
    }
    return (
        <div onClick={giveFocus}>
          <FontAwesomeIcon id="locationIcon" icon={faCompass}></FontAwesomeIcon>
          <input type="text" id="location" ref={inputReference} onKeyDown={getD} onChange={setLoc}/>
        </div>
    )
})

export default Location
