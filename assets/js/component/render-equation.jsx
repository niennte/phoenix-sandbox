import React from 'react';

import ExpressionA from './equation/expression-a'
import ExpressionB from './equation/expression-b'
import ExpressionC from './equation/expression-c'
import ExpressionDefault from './equation/expression-default'
import { attrsToFloat } from '../util'

const RenderEquation = (props) => {

  const { params } = props

  const expressionProps = {
    params: attrsToFloat(params)
  }

  return (
    <code className="equation">
      <ExpressionA { ...expressionProps } />
      <ExpressionB { ...expressionProps } />
      <ExpressionC { ...expressionProps } />
      <ExpressionDefault { ...expressionProps } />
    </code>
  )
}

export default RenderEquation



