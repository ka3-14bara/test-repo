import React from 'react'
import Cell from './Cell'

const Row = ({ rowContent }) => {

  const cells = Object.values(rowContent).map((cellContent, index) => (<Cell key={index} content={cellContent} />));
  return (
    <tr>{cells}</tr>
  )
}

export default Row

