import React from 'react'

const InputTypeText = ({ labelOfInput, inputName, inputID, placeholder, required }) => {
  return (
    <>
        <label htmlFor={inputID}>{labelOfInput}</label><br/>
        <input type="text" id={inputID} name={inputName} placeholder={placeholder} required={required === true} />
    </>
  )
}

export default InputTypeText