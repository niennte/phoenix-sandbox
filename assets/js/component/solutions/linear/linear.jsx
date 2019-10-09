import React from 'react';

const Solution = (props) => {
  const { solution } = props
  return(
    <div className="col-12 ">
      <code className="single-root display-4">
        <var>x</var> = <span className="result">{solution}</span>
      </code>
      <hr />
      <div className="col-12 summary">
        <p className="mb-0 badge badge-warning">Linear</p>
      </div>
    </div>
  )}

export default Solution

