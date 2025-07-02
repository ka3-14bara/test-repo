import React from 'react';
import './Select.css';


function StationType({ labelOfSelect, selectName, selectID, optionsObj }) {

  const optionsObjKeys = Object.keys(optionsObj);
  const options = optionsObjKeys.map(key => {
    return (<option value={key}>{optionsObj[key]}</option>);
  });

  return (
    <>
      <label htmlFor={selectID}> {labelOfSelect} </label><br />
      <select name={selectName} id={selectID}>
        {options}
      </select>
    </>
  );
}

export default StationType