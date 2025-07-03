import React from 'react'

const InputTypeDate = ({ type, labelOfInput, inputName, inputID }) => {
  return (
    <div>
        <label htmlFor={inputID}> {labelOfInput} </label>
        <input type={type} id={inputID} name={inputName} />
    </div>
  )
}

export default InputTypeDate