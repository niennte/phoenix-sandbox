import React from 'react';

const RenderEquation = (props) => {

  const attrsToFloat = (params) => {
    Object.keys(params).map((name) => {
      params[name] = parseFloat(params[name]) || 0
    })
    return params
  }

  const {params} = props
  const {a, b, c} = attrsToFloat(params)

  return (
    <code className="equation">
      {
        (a !== 0) && (
          <span className="expression-a">
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
      {
        (b !== 0) && (
          <span className="expression-b">
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
      {
        (c !== 0) && (
          <span className="expression-c">
            { (c < 0) && (" -") }
            { (c < 0 && (a !== 0 || b !== 0)) && (" ") }
            { (c > 0 && (a !== 0 || b !== 0)) && (" + ") }
            <span className="var-c">{ Math.abs(c) }</span>
          </span>
        )
      }
      {
        (b === 0 && a === 0 && c === 0) && (
          <span className="expression-b">
            <span className="var-b">0</span><var>x</var>
          </span>
        )
      }&nbsp;= 0
    </code>
  )
}

export default RenderEquation



