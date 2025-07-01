import React from 'react';
import Select from './Select';
import './StationCreationPage.css';
import Input from './Input';

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
        <form className='Form'>
            <div><Select labelOfSelect="Выберите необходимую станцию" selectName="TestName" selectID="1234" optionsObj={selectOptions}/></div>
            <div style={{ padding: "10px" }}><Input labelOfInput="Введите ФИО" inputType="text" inputName="FIO" inputID="2736" /></div>
            <div style={{ padding: "10px", margin: "20px" }}><Input labelOfInput="Введите ФИО" inputType="radio" inputName="FIO" inputID="2736" optionsObj={selectOptions}/></div>
            <div style={{ padding: "10px", margin: "20px" }}><Input labelOfInput="Введите ФИО" inputType="checkbox" inputName="FIO" inputID="2736" optionsObj={selectOptions}/></div>
        </form>
    </div>
  );
}

export default StationCreationPage