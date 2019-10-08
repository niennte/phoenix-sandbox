import React from 'react';

import Root from './roots/root'
import Roots from './roots/roots'

const QuadraticSolution = (props) => {
  const { solution, solution: { discriminant }, solution_type } = props.equation
  return(
    <div className="col-12 ">
      {
        (solution.roots.length === 1)?
          ( <Root solution={ solution } solution_type={solution_type} /> ) :
          ( <Roots solution={ solution } solution_type={solution_type} /> )
      }
      <hr />
      <p className="mb-0 badge badge-warning">Quadratic</p>
      <p className="mb-0 badge badge-success">Discriminant: { discriminant }</p>
      { solution_type === 'COMPLEX' && (
        <p className="mb-0 badge badge-danger">Complex roots!</p>
      ) }
    </div>
  )}

export default QuadraticSolution

