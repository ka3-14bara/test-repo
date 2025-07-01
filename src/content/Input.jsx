import React from 'react';

function Input({ labelOfInput, inputType, inputName, inputID, optionsObj = {} }) {
    
    const inputObjKeys = Object.keys(optionsObj);
    let inputElement;
    
    if (inputType === "text") {
        inputElement = (
            <>
                <label htmlFor={inputName}>{labelOfInput}</label>
                <input type={inputType} id={inputID} name={inputName} />
            </>
        );
    } else if (inputType === "radio" || inputType === "checkbox") {
        inputElement = inputObjKeys.map(key => (
            <React.Fragment key={key}>
                <input 
                    type={inputType} 
                    id={key} 
                    name={inputName} 
                    value={optionsObj[key]} 
                />
                <label htmlFor={key}>{optionsObj[key]}</label><br/>
            </React.Fragment>
        ));
    }

    return <>{inputElement}</>;
}

export default Input;
