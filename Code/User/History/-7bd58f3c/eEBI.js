import React, { useState } from "react";
import "./Searchbar.css";

function Searchbar({ placeholder, data}){
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchword = event.target.value;
        setWordEntered(searchword)
        const newFIlter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchword.toLowerCase());
        });

        if (searchword === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFIlter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input 
                    type="text" 
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <div />
                    ) : (
                        <div id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0,15).map((value, key) => {
                        return (
                            <a className="dataitem" href={value.link} target="_blank">
                                <p>{value.title}</p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
export default Searchbar;
