function RadioPanel({Buttons, GroupName}){
    
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