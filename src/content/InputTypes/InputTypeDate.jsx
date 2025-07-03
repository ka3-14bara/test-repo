import React from 'react'

const InputTypeDate = ({ type, labelOfInput, inputName, inputID, required }) => {
  return (
    <div>
        <label htmlFor={inputID}> {labelOfInput} </label>
        <input type={type} id={inputID} name={inputName} required={required === true} />
    </div>
  )
}

export default InputTypeDate