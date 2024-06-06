import { forwardRef, useImperativeHandle } from "react";

const RadioPanel = forwardRef(function RadioPanel({Buttons, GroupName}, ref){
    
    useImperativeHandle(ref, () => ({
        getCurrent: () => {
            return document.querySelector(`input[name="${GroupName}"]:checked`).value;
        },
    }));

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