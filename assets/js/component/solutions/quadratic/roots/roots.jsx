import React from 'react';

import Complex from './complex'

const Roots = (props) => {
  const { solution_type, solution: { roots } } = props
  return(
    <code className="display-4">
      <var>x<sub>1</sub></var> = {
      solution_type === 'COMPLEX' ?
        ( <Complex value={ roots[0] } /> ) : ( roots[0] )
    } <br />
      <var>x<sub>2</sub></var> = {
      solution_type === 'COMPLEX' ?
        ( <Complex value={ roots[1] } /> ) : ( roots[1] )
    }
    </code>
  )}

export default Roots

