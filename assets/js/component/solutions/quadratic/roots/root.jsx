import React from 'react';

const Roots = (props) => {
  const { solution_type, solution: { roots } } = props
  return(
    <code className="display-4">
      <var>x</var> = {solution_type === 'COMPLEX' ?
      ( <Complex value={ roots[0] } /> ) : ( roots[0] )}
    </code>
  )}

export default Roots

