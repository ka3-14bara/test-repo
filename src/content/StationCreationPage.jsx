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
            <div>
                <Select labelOfSelect="Выберите необходимую станцию" selectName="TestName" selectID="1234" optionsObj={selectOptions}/>
            </div>

            <div style={{ padding: "10px" }}>
                <Input labelOfInput="Введите ФИО" inputType="text" inputName="FIO" inputID="2736" />
            </div>

            <div style={{ padding: "10px", margin: "20px" }}>
                <Input labelOfInput="Введите ФИО" inputType="radio" inputName="FIOradio" inputID="143564" optionsObj={selectOptions}/>
            </div>

            <div style={{ padding: "10px", margin: "20px" }}>
                <Input labelOfInput="Введите ФИО" inputType="checkbox" inputName="FIOcheckbox" inputID="2746" optionsObj={selectOptions}/>
            </div>

            <div style={{ padding: "10px", margin: "20px" }}>
                <Input labelOfInput="Принять" inputType="submit" />
            </div>

            <div style={{ padding: "10px", margin: "20px" }}>
                <Input labelOfInput="Выберите дату" inputType="date" inputName="dateBox" inputID="14451564" />
            </div>

            <div style={{ padding: "10px", margin: "20px" }}>
                <Input labelOfInput="Введите число от 1 до 999" inputType="number" inputName="numberBox" inputID="4216854" optionsObj={{"min":"1", "max": "999"}}/> 
            </div>

            <div style={{ padding: "10px", margin: "20px" }}>
                <Input labelOfInput="Choose the colour" inputType="color" inputName="colorBox" inputID="91834" /> 
            </div>

            <div style={{ padding: "10px", margin: "20px" }}>
                <Input labelOfInput="Enter the telephone" inputType="tel" inputName="telBox" inputID="32749" /> 
            </div>

            <div style={{ padding: "10px", margin: "20px" }}>
                <Input labelOfInput="Enter the email" inputType="email" inputName="emailBox" inputID="480789" required = {true}/> 
            </div>

            <div style={{ padding: "10px", margin: "20px" }}>
                <Input labelOfInput="Сбросить" inputType="reset" />
            </div>
        </form>
    </div>
  );
}

export default StationCreationPage