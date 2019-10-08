import React, { Fragment} from 'react';

import EquationSolver from './component/equation-solver'

const Root = () => (
  <Fragment>
    <h4 className="display-4">
      Quadratic Equation Solver
    </h4>
    <EquationSolver />
  </Fragment>
)

export default Root
