import React from 'react';

const Complex = (props) => {
  console.log(props)
  const { real, imaginary } = props.value
  const signed = ( imaginary < 0 )
  return(
    <code className="result">{ real } { signed? '-' : '+'} { signed? Math.abs(imaginary) : imaginary }i</code>
  )}

export default Complex

