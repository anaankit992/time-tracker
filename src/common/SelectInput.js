import React from 'react';
import Select from 'react-select';



function SelectInput(props) {

    const { options, handleChange, selectedOption } = props;

    return (
        <Select
            {...props}
            value={selectedOption}
            onChange={handleChange}
            options={options}
            className="inputType"
        />
    )

}



export default SelectInput