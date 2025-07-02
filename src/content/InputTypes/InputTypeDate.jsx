import React from 'react'

const InputTypeDate = ({ labelOfInput, inputName, inputID }) => {
  return (
    <>
        <label htmlFor={inputID}> {labelOfInput} </label>
        <input type="date" id={inputID} name={inputName} />
    </>
  )
}

export default InputTypeDate