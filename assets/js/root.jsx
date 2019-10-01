import React, { Fragment} from 'react';

import Calculator from './component/calculator'

const Root = () => (
  <Fragment>
    <h4 className="display-4">
      Quadratic Equation solver
    </h4>
    <Calculator />
  </Fragment>
)

export default Root
