import React from 'react'

const InputTypeRadioCheckbox = ({ inputType, inputName, inputID, optionsObj = {}, required }) => {

    const inputObjKeys = Object.keys(optionsObj);
    const blockElement = inputObjKeys.map(key => (
                <React.Fragment key={key}>
                  <input 
                      type={inputType} 
                      id={key+inputID} 
                      name={inputName} 
                      value={optionsObj[key]} 
                      required={required === true}
                  />
                  <label htmlFor={key+inputID}>{optionsObj[key]}</label><br/>
              </React.Fragment>
    ));
    
    return <> {blockElement} </>;
}

export default InputTypeRadioCheckbox