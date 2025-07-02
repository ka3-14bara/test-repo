import React from 'react'

const InputTypeColor = ({ labelOfInput, inputName, inputID }) => {
  return (
    <>
        <label htmlFor={inputID}> {labelOfInput} </label><br/>
        <input type="color" id={inputID} name={inputName} defaultValue="#ff00ff"></input>
    </>
  )
}

export default InputTypeColor