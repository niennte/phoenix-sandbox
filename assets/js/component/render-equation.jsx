import React from 'react';

const RenderEquation = (props) => {

  const {params: { a, b, c } } = props

  //noinspection JSAnnotator
  return (
    <code>
      {
        (parseFloat(a) !== 0) && (
          <i>{ (parseFloat(a) === -1) && ("-") }
            {
              (Math.abs(parseFloat(a)) !== 1) && (
                <span>{a}</span>
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
                <span>{ Math.abs(b) }</span>
              )
            }
            <var>x</var>
          </span>
        )
      }
      {
        (parseFloat(c) !== 0) && (
          (parseFloat(c) <= 0) ? (
            <i> - { Math.abs(c) }</i>
          ) : (
            <i> + { c }</i>
          )
        )
      } {
      (parseFloat(b) === 0 && parseFloat(a) === 0 && parseFloat(c) === 0) && (
        <span>0<var>x</var></span>
      )
    } = 0
    </code>
  )
}

export default RenderEquation



