import React from 'react'

const InputTypeText = ({ labelOfInput, inputType, inputName, inputID }) => {
  return (
    <>
        <label htmlFor={inputID}>{labelOfInput}</label><br/>
        <input type={inputType} id={inputID} name={inputName} />
    </>
  )
}

export default InputTypeText