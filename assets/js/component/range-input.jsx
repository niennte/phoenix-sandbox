import React from 'react';

const RangeInput = ({ title, ...attrs }) => (
  <div className={`mt-3 mt-md-0 form-row mb-2 align-items-center group-${ title }`}>
    <div className="col-md-3 px-0 input-group">
      <div className="input-group-prepend">
        <code className="input-group-text" id="basic-addon1">
          <var>{ title }</var>&nbsp;=
        </code>
      </div>
      <input type="number" className="form-control form-control-lg" { ...attrs } />
    </div>
    <div className="col-md-9 px-0 d-flex">
      <input type="range" min="-100" max="100" className="slider " { ...attrs } />
    </div>
  </div>
)

export default RangeInput

