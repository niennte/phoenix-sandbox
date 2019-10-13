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
    <span className="expression-b">
      {
        (b !== 0) && (
          <span className="var-b-container">
            { (b < 0) && (" -") }
            { (b < 0 && a !== 0) && (" ") }
            { (b > 0 && a !== 0) && (" + ") }
            {
              (Math.abs(b) !== 1) && (
                <span className="var-b">{ Math.abs(b) }</span>
              )
            }
            <var>x</var>
          </span>
        )
      }
    </span>
  )
}

export default Expression



