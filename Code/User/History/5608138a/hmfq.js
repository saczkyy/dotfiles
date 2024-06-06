import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'


const Location = forwardRef(function Location({setLocation, getData}, ref){
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)

    const giveFocus = (e) => {
        if(inputRef.current){ 
            inputRef.current.focus()
        }
    }
    const handleFocus = (e) => {
        setIsFocused(true)
    }
    const handleBlur = (e) => {
        setIsFocused(false)
    }
    useImperativeHandle(ref, () => ({
        getIsFocused: () => {
            return isFocused;
        },
        focus: () => {
            giveFocus()
        }
    }));

    const setLoc = (e) => {
        setLocation(e.target.value)
    }
    const getD = (e) => {
        if (e.key === "Enter"){
            console.log(inputRef.current.value);
            if (!inputRef.current.value) {return}
            getData()
            inputRef.current.value = ''
            inputRef.current.blur()
        } else if (e.key === "Escape"){
            inputRef.current.blur()
        }
    }
    return (
        <div onClick={giveFocus}>
          <FontAwesomeIcon id="locationIcon" icon={faCompass}></FontAwesomeIcon>
          <input type="text" id="location" onBlur={handleBlur} ref={inputRef} onFocus={handleFocus} onKeyDown={getD} onChange={setLoc}/>
        </div>
    )
})

export default Location
