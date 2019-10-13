// @flow
import React from "react";

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
    <span className="expression-a">
      {
        (a !== 0) && (
          <span className="var-a-container">
            { (a === -1) && ("-") }
            {
              (Math.abs(a) !== 1) && (
                <span className="var-a">{a}</span>
              )
            }
            <var>x</var><sup>2</sup>
          </span>
        )
      }
    </span>
  )
}

export default Expression



