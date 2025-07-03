import React from 'react'

const InputTypeNumber = ({ labelOfInput, inputName, inputID, optionsObj, required }) => {
  return (
    <>
        <label htmlFor={inputID}> {labelOfInput} </label><br/>
        <input type="number" id={inputID} name={inputName} min={optionsObj["min"]} max={optionsObj["max"]} required={required === true} />
    </>
  )
}

export default InputTypeNumber