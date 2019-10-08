import React from 'react';

const Solution = (props) => {
  const { solution } = props
  return(
    <div className="col-12 ">
      <code className="display-4">
        <var>x</var> = {solution}
      </code>
      <hr />
      <p className="mb-0 badge badge-warning">Linear</p>
    </div>
  )}

export default Solution

