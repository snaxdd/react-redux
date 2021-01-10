import React, { Component } from "react";
import { observer } from "mobx-react";
import { runInAction } from "mobx";

import { CounterStoreClass } from "../Stores";

const store = new CounterStoreClass();

export const CounterClass = observer(
  class extends Component {
    componentDidMount() {
      runInAction(() => {
        store.count = this.props.initialCount;
      });
    }

    render() {
      return (
        <div>
          <button onClick={store.dec}>-</button>
          <span style={{ color: store.color }}>{store.count}</span>
          <button onClick={store.inc}>+</button>
        </div>
      );
    }
  }
);

// import React, {Component} from 'react';
//
// export class CounterClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: this.props.initialCount || 0,
//     };
//   }
//
//   decrement = () => {
//     return this.setState(prevState => ({
//       count: prevState.count - 1,
//     }));
//   };
//
//   increment = () => {
//     return this.setState(prevState => ({
//       count: prevState.count + 1,
//     }));
//   };
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.decrement}>-</button>
//         <span>{this.state.count}</span>
//         <button onClick={this.increment}>+</button>
//       </div>
//     );
//   }
// }
