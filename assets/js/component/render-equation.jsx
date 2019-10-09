import React from 'react';

const RenderEquation = (props) => {

  const {params: { a, b, c } } = props

  return (
    <code className="equation">
      {
        (parseFloat(a) !== 0) && (
          <span className="expression-a">{ (parseFloat(a) === -1) && ("-") }
            {
              (Math.abs(parseFloat(a)) !== 1) && (
                <span className="var-a">{a}</span>
              )
            }
            <var>x</var><sup>2</sup>
          </span>
        )
      }
      {
        (parseFloat(b) !== 0) && (
          <span className="expression-b">
            { (parseFloat(b) < 0) && (" -") }
            { ((parseFloat(b)) < 0 && (parseFloat(a) !== 0)) && (" ") }
            { ((parseFloat(b)) > 0 && (parseFloat(a) !== 0)) && (" + ") }
            {
              (Math.abs(b) !== 1) && (
                <span className="var-b">{ Math.abs(b) }</span>
              )
            }
            <var>x</var>
          </span>
        )
      }
      {
        (parseFloat(c) !== 0) && (
          (parseFloat(c) <= 0) ? (
            <span className="expression-c"> - <span className="var-c">{ Math.abs(c) }</span></span>
          ) : (
            <span className="expression-c"> + <span className="var-c">{ c }</span></span>
          )
        )
      } {
      (parseFloat(b) === 0 && parseFloat(a) === 0 && parseFloat(c) === 0) && (
        <span className="expression-b"><span className="var-b">0</span><var>x</var></span>
      )
    }&nbsp;= 0
    </code>
  )
}

export default RenderEquation



