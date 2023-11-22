import './filter.css'
import { useState } from 'react';

export default function Filter({props, onChange}) {
    const data = props
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => { 
        setSelectedValue(event.target.value);
        onChange(event.target.value)
    }

    const options = ()=> {
        const optionArray = []
        data.genre.forEach((opt, index) => {
            optionArray.push(
              <option key={index} value={opt.name}>
                {opt.name.toUpperCase()}
              </option>
            )
          })
        return optionArray
    }
    return (
        <div className='filter'>
            <label htmlFor={data.name}>{data.name.toUpperCase()}</label>
            <select name={data.name} id={data.name} onChange={handleChange} value={selectedValue}>
                <option value="">SELECT GENRE</option>
                {props && options()}
            </select>
        </div>
    )
}