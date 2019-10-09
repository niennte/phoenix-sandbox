import React from 'react';

import Complex from './complex'

const Roots = (props) => {
  const { solution_type, solution: { roots } } = props
  return(
    <code className="display-4 two-roots">
      <span className="root-1"><var>x<sub>1</sub></var> = {
      solution_type === 'COMPLEX' ?
        ( <Complex value={ roots[0] } /> ) : <span className="result">{ roots[0] }</span>
    } </span><br />
      <span className="root-2"><var>x<sub>2</sub></var> = {
      solution_type === 'COMPLEX' ?
        ( <Complex value={ roots[1] } /> ) : <span className="result">{ roots[1] }</span>
    }</span>
    </code>
  )}

export default Roots

