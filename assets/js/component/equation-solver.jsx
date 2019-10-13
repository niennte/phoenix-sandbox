// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';

import { emitParams } from '../action/index';
import RenderTitle from './render-title'
import RenderEquation from './render-equation';
import RangeInput from './range-input';
import RenderSolution from './render-solution';
import RenderParams from './render-params';
import SolveButton from './solve-button';

type Props = {
  emitParams: Function,
  solution: Object
};

const mapStateToProps = state => ({
  emitParams: Function,
  solution: state.equation.solution
});


class EquationSolver extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      ...props.solution,
      request: {
        a: 0,
        b: 0,
        c: 0
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.validateField = this.validateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState((prevState) => {
      const {request} = prevState;
      request[name] = value;
      return {request};
    });
  }

  validateField(e) {
    const {name, value} = e.target;
    this.setState((prevState) => {
      const {request} = prevState;
      request[name] = parseFloat(value) || 0;
      return {request};
    });
  }

  handleSubmit(e) {
    const {dispatch} = this.props
    const {request} = this.state
    e.preventDefault()
    Object.keys(request).map((name) => {
      request[name] = parseFloat(request[name]) || 0;
    });
    dispatch(emitParams(request));
  }

  render() {
    const { solution } = this.props
    const { request } = this.state
    const handlers = {
      onChange: this.handleChange,
      onBlur: this.validateField
    }
    const { params } = solution

    return (
      <div className="container align-content-center">
        <RenderTitle />

        <form
          className="mb-5"
          onSubmit={this.handleSubmit}
        >
          <RangeInput
            title="a"
            name="a"
            value={ request.a }
            {...handlers}
          />
          <RangeInput
            title="b"
            name="b"
            value={ request.b }
            {...handlers}
          />
          <RangeInput
            title="c"
            name="c"
            value={ request.c }
            {...handlers}
          />

          <div className="form-row align-items-center mb-1">
            <div className="col-12 display-4">
              <RenderEquation params={ request }/>
            </div>
          </div>

          <div className="form-row align-items-center">
            <SolveButton />
          </div>

          <div className="form-row align-items-center mb-1 solution">
            <RenderSolution { ...solution } />
            <div className="col-12 summary">
              <RenderEquation params={ params } /><br />
              <RenderParams params={ params } />
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export { EquationSolver }
export default connect(mapStateToProps)(EquationSolver)