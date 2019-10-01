import React from 'react';
import { connect } from 'react-redux';

import { emitParams } from '../action/index';

type Props = {
  dispatch: Function,
};

const mapStateToProps = state => ({
  emitParams: Function,
  solution: state
});


class Calculator extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = props.solution
  }

  render() {
    const { solution, dispatch } = this.props

    return(
      <React.Fragment>
        <h4 className="display-5">Quadratic Equation solver</h4>
        <button
          onClick={ (e) => {
              dispatch(emitParams({
                "c":-27,
                "b":0,
                "a":1
              }));
            }
          }>
          Send sample params
        </button>
        <div className="text-left">
        <pre>
        { JSON.stringify(solution, null, 2) }
        </pre>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(Calculator)