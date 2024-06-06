import { forwardRef } from "react";

const RadioPanel = forwardRef(function RadioPanel({Buttons, GroupName}){
    
    function getCurrent(){
        return document.querySelector(`input[name="${GroupName}"]:checked`).value;
    }

    return (
        <div className="radioButtons">
            {Buttons.map((name, i) => {
                return (
                    <div className="rbSet">    
                        <input type="radio" className="rb" name={GroupName} id={i} value={name}/>
                        <label htmlFor={i}>{name}</label>
                    </div>
                )
            })}
        </div>
    );
})


export default RadioPanel