import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './Actions';

const MainComp = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>


      <div style={{ display:"flex" , gap:"40px" }}>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};


export default connect( mapStateToProps,mapDispatchToProps)(MainComp);