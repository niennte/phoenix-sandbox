import React from 'react';

const Roots = (props) => {
  const { solution_type, solution: { roots } } = props
  return(
    <code className="display-4 single-root">
      <var>x</var> = {
      solution_type === 'COMPLEX' ?
        ( <Complex value={ roots[0] }/> ) :
        ( <span className="result">{ roots[0] }</span> )
      }
    </code>
  )}

export default Roots

