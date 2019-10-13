// @flow
import React from 'react';

type Props = {
  params: {
    a: number,
    b: number,
    c: number
  }
};

const Expression = ({ params }: Props) => {

  const {a, b, c} = params

  return (
    <span className="expression-c">
      {
        (c !== 0) && (
          <span className="var-c-container">
            { (c < 0) && (" -") }
            { (c < 0 && (a !== 0 || b !== 0)) && (" ") }
            { (c > 0 && (a !== 0 || b !== 0)) && (" + ") }
            <span className="var-c">{ Math.abs(c) }</span>
          </span>
        )
      }
    </span>
  )
}

export default Expression



