// @flow
import React from 'react';

type Props =  {
  a: any,
  b: any,
  c: any
};

const RenderEquation = ({ params }: Props) => {

  const {a, b, c} = params

  return (
    <span className="params ">
      <code><var className="var-a">a</var> = { a }</code>,&nbsp;
      <code><var className="var-b">b</var> = { b }</code>,&nbsp;
      <code><var className="var-c">c</var> = { c }</code>
    </span>
  )
}

export default RenderEquation



