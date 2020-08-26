import React from 'react';
import Select from 'react-select';



function SelectInput(props) {

    const { options, selectedOption } = props;

    return (
        <Select
            {...props}
            options={options}
            className="inputType"
        />
    )

}



export default SelectInput