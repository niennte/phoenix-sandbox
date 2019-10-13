// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {
  connected: Boolean
};

const mapStateToProps = state => ({
  connected: state.connection.joined
});

const SolveButton = ({ connected }: Props) => (
  <button
    className="btn btn-success btn-lg w-100 mb-2"
    disabled={ !connected }
  >{ connected ? 'Solve' : 'Connecting' }
  </button>
)


export { SolveButton }
export default connect(mapStateToProps)(SolveButton)