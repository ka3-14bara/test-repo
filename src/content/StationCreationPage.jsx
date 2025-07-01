import React from 'react'
import Select from './Select'

const StationCreationPage = () => {
    const selectOptions = {
        " ": "Выберите станцию", 
        "ps": "ПС", 
        "os": "ОС", 
        "ops": "ОПС",
        "dsf": "ал",
    };
  return (
    <div style={{margin: "20px"}}>
        <form style={{width: '300px', height: '50px'}}>
            <Select labelOfSelect="Выберите необходимую станцию" selectName="TestName" selectID="1234" optionsObj={selectOptions}/>
        </form>
    </div>
  );
}

export default StationCreationPage