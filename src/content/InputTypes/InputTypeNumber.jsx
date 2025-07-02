import React from 'react'

const InputTypeNumber = ({ labelOfInput, inputName, inputID, optionsObj }) => {
  return (
    <>
        <label for={inputID}> {labelOfInput} </label><br/>
        <input type="number" id={inputID} name={inputName} min={optionsObj["min"]} max={optionsObj["max"]} />
    </>
  )
}

export default InputTypeNumber