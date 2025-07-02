import React from 'react';
import InputTypeText from './InputTypes/InputTypeText';
import InputTypeRadioCheckbox from './InputTypes/InputTypeRadioCheckbox';
import InputTypeSubmit from './InputTypes/InputTypeSubmit';
import InputTypeDate from './InputTypes/InputTypeDate';
import InputTypeNumber from './InputTypes/InputTypeNumber';

function Input({ labelOfInput = "", inputType = "text", inputName, inputID, optionsObj = {} }) {
    
    let inputElement;
    
    if (inputType === "text") {
        inputElement = (
            <InputTypeText labelOfInput={labelOfInput} inputType={inputType} inputName={inputName} inputID={inputID} />
        );
    } else if (inputType === "radio" || inputType === "checkbox") {
        inputElement = (
            <InputTypeRadioCheckbox inputType={inputType} inputName={inputName} inputID={inputID} optionsObj={optionsObj} />
        );
    } else if (inputType === "submit") {
        inputElement = (<InputTypeSubmit inputType={inputType} buttonValue={labelOfInput} />);
    } else if (inputType === "date") {
        inputElement = (<InputTypeDate labelOfInput={labelOfInput} inputName={inputName} inputID={inputID}/>)
    } else if (inputType === "number") {
        inputElement = (<InputTypeNumber labelOfInput={labelOfInput} inputName={inputName} inputID={inputID} optionsObj={optionsObj} />)
    }

    return <>{inputElement}</>;
}

export default Input;
