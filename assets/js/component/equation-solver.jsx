// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {emitParams} from '../action/index';
import RenderEquation from './render-equation';
import RangeInput from './range-input';
import RenderSolution from './render-solution';

type Props = {
  dispatch: Function,
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getDerivedStateFromProps(props) {
    this.setState(currentState => {
      return {
        ...currentState,
        ...props.solution,
        request: props.solution.params
      }
    })
  }

  handleChange(e) {
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
    dispatch(emitParams(request));
  }

  render() {
    const {solution, dispatch, connected} = this.props
    const {request} = this.state

    return (
      <div className="container align-content-center">
        <p>Enter&nbsp;
          <code><var>a</var></code>,&nbsp;
          <code><var>b</var></code>,&nbsp;
          <code><var>c</var></code> to solve equation of type&nbsp;
          <code><var>a</var><var>x</var><sup>2</sup> + <var>b</var><var>x</var> + <var>c</var> = 0</code>
        </p>

        <form
          className="mb-5"
          onSubmit={this.handleSubmit}
        >
          <RangeInput
            title="a"
            name="a"
            value={ request.a }
            onChange={this.handleChange}
          />
          <RangeInput
            title="b"
            name="b"
            value={ request.b }
            onChange={this.handleChange}
          />
          <RangeInput
            title="c"
            name="c"
            value={ request.c }
            onChange={this.handleChange}
          />

          <div className="form-row align-items-center mb-1">
            <div className="col-12 display-4">
              <RenderEquation params={request}/>
            </div>
          </div>

          <div className="form-row align-items-center">
            <button
              className="btn btn-info btn-lg w-100 mb-2"
              disabled={ !connected }
            >{ connected ? 'Solve' : 'Connecting' }
            </button>
          </div>

          <div className="form-row align-items-center mb-1">
            <RenderSolution {...solution} />
          </div>
        </form>

      </div>
    )
  }
}

export default connect(mapStateToProps)(EquationSolver)