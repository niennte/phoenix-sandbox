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
    <span className="expression-default">
      {
        (b === 0 && a === 0 && c === 0) && (
          <span className="var-b-container">
            <span className="var-b">0</span><var>x</var>
          </span>
        )
      }&nbsp;= 0
    </span>
  )
}

export default Expression



