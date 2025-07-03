import React from 'react'

const InputTypeColor = ({ labelOfInput, inputName, inputID, required }) => {
  return (
    <>
        <label htmlFor={inputID}> {labelOfInput} </label><br/>
        <input type="color" id={inputID} name={inputName} defaultValue="#ff00ff" required={required === true} />
    </>
  )
}

export default InputTypeColor