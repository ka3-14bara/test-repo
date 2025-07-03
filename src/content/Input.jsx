import React from 'react';
import InputTypeText from './InputTypes/InputTypeText';
import InputTypeRadioCheckbox from './InputTypes/InputTypeRadioCheckbox';
import InputTypeSubmit from './InputTypes/InputTypeSubmitReset';
import InputTypeDate from './InputTypes/InputTypeDate';
import InputTypeNumber from './InputTypes/InputTypeNumber';
import InputTypeColor from './InputTypes/InputTypeColor';
import InputTypeTelephone from './InputTypes/InputTypeTelMail';
import InputTypeFile from './InputTypes/InputTypeFile';

function Input({ labelOfInput = "", inputType = "text", inputName, inputID, optionsObj = {}, required = false, multiple = false, placeholder = "" }) {
    
    let inputElement;
    
    if (inputType === "text") {
        inputElement = (
            <InputTypeText labelOfInput={labelOfInput} inputName={inputName} inputID={inputID} placeholder={placeholder}/>
        );
    } else if (inputType === "radio" || inputType === "checkbox") {
        inputElement = (
            <InputTypeRadioCheckbox inputType={inputType} inputName={inputName} inputID={inputID} optionsObj={optionsObj} />
        );
    } else if (inputType === "submit" || inputType === "reset") {
        inputElement = (
            <InputTypeSubmit inputType={inputType} buttonValue={labelOfInput} />
        );
    } else if (inputType === "date" || inputType === "month") {
        inputElement = (
            <InputTypeDate type={inputType} labelOfInput={labelOfInput} inputName={inputName} inputID={inputID}/>
        );
    } else if (inputType === "number") {
        inputElement = (
            <InputTypeNumber labelOfInput={labelOfInput} inputName={inputName} inputID={inputID} optionsObj={optionsObj} />
        );
    } else if (inputType === "color") {
        inputElement = (
            <InputTypeColor labelOfInput={labelOfInput} inputName={inputName} inputID={inputID} />
        );
    } else if (inputType === "tel" || inputType === "email") {
        inputElement = (
            <InputTypeTelephone labelOfInput={labelOfInput} inputType={inputType} inputName={inputName} inputID={inputID} required={required} />
        );
    } else if (inputType === "file") {
        inputElement = (
            <InputTypeFile label = {labelOfInput} inputID = {inputID} inputName={inputName} multiple={multiple} />
        );
    }

    return <>{inputElement}</>;
}

export default Input;
