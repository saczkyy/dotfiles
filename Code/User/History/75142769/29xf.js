function RadioPanel({Buttons, GroupName}){
    
    function getCurrent(){
        document.querySelector(`input[name=${GroupName}]`)
    }

    return (
        <div className="radioButtons">
            {Buttons.map((name, i) => {
                return (
                    <div className="rbSet">    
                        <input type="radio" className="rb" name={GroupName} id={name} />
                        <label htmlFor={name}>{name}</label>
                    </div>
                )
            })}
        </div>
    );
}


export default RadioPanel