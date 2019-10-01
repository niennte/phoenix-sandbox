import React, { Fragment} from 'react';

import Calculator from './component/calculator'

const Root = () => (
  <Fragment>
    <p className="display-4">
      Hello from the React root....
    </p>
    <Calculator />
  </Fragment>
)

export default Root
