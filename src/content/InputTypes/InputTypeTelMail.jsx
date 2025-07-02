import React from 'react'

const phonePattern = "\\+7[0-9]{10}";
const emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
const emailPlaceHolder = "email@example.ru";
const phonePlaceHolder = "+78005553535";

const InputTypeTelMail = ({ labelOfInput, inputType, inputName, inputID, required }) => {

  const pattern = (inputType === "tel" ? phonePattern : emailPattern);
  const placeholder = (inputType === "tel" ? phonePlaceHolder : emailPlaceHolder);

  return (
    <>
        <label htmlFor = { inputID }> { labelOfInput } </label><br/>
        <input type = { inputType } 
               id = { inputID } 
               name = { inputName } 
               placeholder = { placeholder }
               pattern = { pattern } 
               required = {required === true} />
    </>
  )
}

export default InputTypeTelMail