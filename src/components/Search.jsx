import React, { memo } from "react";

const Search = ({ onChange }) => {
    console.log("search reloded");
    return <input onChange={(e) => onChange(e.target.value)}></input>;
};

export default memo(Search);
