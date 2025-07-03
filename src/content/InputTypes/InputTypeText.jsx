import React from 'react'

const InputTypeText = ({ labelOfInput, inputName, inputID, placeholder }) => {
  return (
    <>
        <label htmlFor={inputID}>{labelOfInput}</label><br/>
        <input type="text" id={inputID} name={inputName} placeholder={placeholder} />
    </>
  )
}

export default InputTypeText