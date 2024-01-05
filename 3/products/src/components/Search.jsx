import { useState } from "react";

const Search = ({ onChangeCallback }) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue)
        onChangeCallback && onChangeCallback(inputValue)
      }
    
    return (
        <div className="input-group mb-3 px-5">
            <span className="input-group-text">Search</span>
            <input type="text" className="form-control" value={value} onChange={handleChange} />
        </div>
    )
}

export default Search;