function AdditionalInfo({data}){
    const dataToShow = data.rain ? [ 
        data.rain['1h'] ? data.rain['1h'] : null , 
        data.rain['3h'] ? data.rain['3h'] : null 
    ] : ( data.snow ? [
        data.snow['1h'] ? data.snow['1h'] : null , 
        data.snow['3h'] ? data.snow['3h'] : null 
    ] : null)
    
    
    return dataToShow ? (
    (
        <div className="additional">
            <div id="1h">
                <h3 className="detailTitle">Last hour</h3>
                <h2 className="detailData">{dataToShow[0]}mm</h2>
            </div>
            {dataToShow[1] ? (
            <div id="3h">
                <h3 className="detailTitle">Last 3 hours</h3>
                <h2 className="detailData">{dataToShow[1]}mm</h2>
            </div>
            ) : null}
        </div>
    )
    ) : (
        null
    )
}

export default AdditionalInfo