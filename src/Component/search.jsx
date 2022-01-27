import React from "react";


const Search = ({searchedString, callbackSearch}) => {

    return (

        <>
        <input
            type="text"
            placeholder="Search food"
            value={searchedString}
            onChange={(e) => callbackSearch(e.target.value)}
        />
    </>
    )

}
export default Search


