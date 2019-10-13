import React from 'react';

import InfiniteSet from './solutions/linear/infinite-set'
import NoRoot from './solutions/linear/no-root'
import Linear from './solutions/linear/linear'
import Quadratic from './solutions/quadratic/quadratic'

const RenderSolution = (props) => {
  const { solution_type, equation_type } = props
  let result = null
  if (equation_type === 'linear') {
    switch (solution_type) {
      case "INFINITE_SET":
        result = ( <InfiniteSet /> )
        break
      case "NO_ROOT":
        result = ( <NoRoot /> )
        break
      case "REAL":
        result = ( <Linear solution = { props.solution } /> )
    }
  } else {
    result =  <Quadratic equation = { props } />
  }
  return result
}

export default RenderSolution

