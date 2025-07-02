import React from 'react'

const InputTypeText = ({ labelOfInput, inputName, inputID }) => {
  return (
    <>
        <label htmlFor={inputID}>{labelOfInput}</label><br/>
        <input type="text" id={inputID} name={inputName} />
    </>
  )
}

export default InputTypeText