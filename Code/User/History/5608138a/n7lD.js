import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'


const Location = forwardRef(function Location({setLocation, getData}, ref){
    const [isFocused, setIsFocused] = useState(false)

    const giveFocus = (e) => {
        if(ref.current){ 
            ref.current.focus()
            setIsFocused(true)
        }
    }
    const handleFocus = (e) => {
        setIsFocused(true)
    }
    const handleBlur = (e) => {
        setIsFocused(false)
    }
    useImperativeHandle(ref, () => {
        getIsFocused: () => {
            return isFocused;
        }
    })
    
    const setLoc = (e) => {
        setLocation(e.target.value)
    }
    const getD = (e) => {
        if (e.key == "Enter"){
            if (ref.current.value) {return}
            getData()
            ref.current.value = ''
            ref.current.blur()
        } else if (e.key == "Escape"){
            ref.current.blur()
        }
    }
    return (
        <div onClick={giveFocus}>
          <FontAwesomeIcon id="locationIcon" icon={faCompass}></FontAwesomeIcon>
          <input type="text" id="location" onBlur={handleBlur} ref={ref} onFocus={handleFocus} onKeyDown={getD} onChange={setLoc}/>
        </div>
    )
})

export default Location
