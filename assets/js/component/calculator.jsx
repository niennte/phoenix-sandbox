// @flow
import React from 'react';
import {connect} from 'react-redux';

import {emitParams} from '../action/index';
import RenderEquation from './render-equation';

type Props = {
  dispatch: Function,
};

const mapStateToProps = state => ({
  emitParams: Function,
  solution: state.equation.solution,
  connected: state.connection.joined
});


class Calculator extends React.Component<Props> {
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
    const { name, value } = e.target;

    this.setState((prevState) => {
      const { request } = prevState;
      request[name] = parseFloat(value);
      return { request };
    });
  }

  render() {
    const { solution, dispatch, connected } = this.props
    const { request } = this.state

    return (
      <div className="container align-content-center">
        <p>Enter <code><var>a</var></code>, <code><var>b</var></code>, <code><var>c</var></code> to solve equation of
          type <code><var>a</var><var>x</var><sup>2</sup> + <var>b</var><var>x</var> + <var>c</var> = 0</code></p>

        <div className="form-row align-items-center">
          <div className="col-sm-8 ml-auto text-center">
            <div className="row">
              <div className="col-4"><code><var>a</var> = { request.a }</code></div>
              <div className="col-4"><code><var>b</var> = { request.b }</code></div>
              <div className="col-4"><code><var>c</var> = { request.c }</code></div>
            </div>
          </div>
          <div className="col-sm-4 mr-auto">

          </div>
        </div>

        <form
          className="mb-5"
          onSubmit={ (e) => {
            e.preventDefault()
            dispatch(emitParams(request));
          }}
        >
          <div className="form-row align-items-center">
            <div className="col-sm-8 ml-auto">
              <div className="input-group mb-2">
                <label className="sr-only" htmlFor="inlineFormInputGroup">a</label>
                <input type="number" className="form-control form-control-lg"
                   name="a"
                   value={ request.a }
                   onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text"> x<sup>2</sup> +</div>
                </div>
                <label className="sr-only" htmlFor="inlineFormInputGroup">b</label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  name="b"
                  value={ request.b }
                  onChange={this.handleChange}
                  />
                <div className="input-group-append">
                  <div className="input-group-text"> x +</div>
                </div>
                <label className="sr-only" htmlFor="inlineFormInputGroup">c</label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  name="c"
                  value={ request.c }
                  onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text"> = 0</div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mr-auto">
              <button
                className="btn btn-primary btn-lg w-100 mb-2"
                disabled={ !connected }
              >{ connected ? 'Solve' : 'Connecting' }</button>
            </div>
          </div>
          <div className="form-row align-items-center mb-5">
            <div className="col-sm-8 text-center">
              <RenderEquation params={request} />
            </div>
            <div className="col-sm-4 text-center">
              <code><var>x</var> = ...</code>
            </div>
          </div>
        </form>


        <hr />
        <div className="text-left">
          <h5>Backend response</h5>
          <pre>
          { JSON.stringify(solution, null, 2) }
          </pre>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Calculator)