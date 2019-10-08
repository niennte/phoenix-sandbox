import React from 'react';

const RenderEquation = (props) => {

  const {params: { a, b, c } } = props

  return (
    <code className="equation">
      {
        (parseFloat(a) !== 0) && (
          <i>{ (parseFloat(a) === -1) && ("-") }
            {
              (Math.abs(parseFloat(a)) !== 1) && (
                <span className="var-A">{a}</span>
              )
            }
            <var>x</var><sup>2</sup>
          </i>
        )
      }
      {
        (parseFloat(b) !== 0) && (
          <span>
            { (parseFloat(b) < 0) && (" -") }
            { ((parseFloat(b)) < 0 && (parseFloat(a) !== 0)) && (" ") }
            { ((parseFloat(b)) > 0 && (parseFloat(a) !== 0)) && (" + ") }
            {
              (Math.abs(b) !== 1) && (
                <span className="var-B">{ Math.abs(b) }</span>
              )
            }
            <var>x</var>
          </span>
        )
      }
      {
        (parseFloat(c) !== 0) && (
          (parseFloat(c) <= 0) ? (
            <i className="var-C"> - { Math.abs(c) }</i>
          ) : (
            <i className="var-C"> + { c }</i>
          )
        )
      } {
      (parseFloat(b) === 0 && parseFloat(a) === 0 && parseFloat(c) === 0) && (
        <span>0<var>x</var></span>
      )
    }&nbsp;= 0
    </code>
  )
}

export default RenderEquation



