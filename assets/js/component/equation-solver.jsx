// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {emitParams} from '../action/index';
import RenderEquation from './render-equation';
import RangeInput from './range-input';
import RenderSolution from './render-solution';

type Props = {
  emitParams: Function,
  solution: Object,
  connected: Boolean
};

const mapStateToProps = state => ({
  emitParams: Function,
  solution: state.equation.solution,
  connected: state.connection.joined
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
    Object.keys(request).map(function(name) {
      request[name] = parseFloat(request[name]) || 0;
    });
    dispatch(emitParams(request));
  }

  render() {
    const {solution, connected} = this.props
    const {request} = this.state
    const handlers = {
      onChange: this.handleChange,
      onBlur: this.validateField
    }
    const { params } = solution

    return (
      <div className="container align-content-center">
        <p className="lead">Enter&nbsp;
          <code><var className="var-a">a</var></code>,&nbsp;
          <code><var className="var-b">b</var></code>,&nbsp;
          <code><var className="var-c">c</var></code> to solve equation of type<br />
          <code><var className="var-a">a</var><var>x</var><sup>2</sup> + <var className="var-b">b</var><var>x</var> + <var className="var-c">c</var> = 0</code>
        </p>

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
              <RenderEquation params={request}/>
            </div>
          </div>

          <div className="form-row align-items-center">
            <button
              className="btn btn-success btn-lg w-100 mb-2"
              disabled={ !connected }
            >{ connected ? 'Solve' : 'Connecting' }
            </button>
          </div>

          <div className="form-row align-items-center mb-1 solution">
            <RenderSolution {...solution} />
            <div className="col-12">
              <RenderEquation params={params}/><br />
              <span className="params ">
                <code><var>a</var> = { params.a }</code>,&nbsp;
                <code><var>b</var> = { params.b }</code>,&nbsp;
                <code><var>c</var> = { params.c }</code>
              </span>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export { EquationSolver }
export default connect(mapStateToProps)(EquationSolver)