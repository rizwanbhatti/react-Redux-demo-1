import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'




function demo(state = 0, action) {
  switch (action.type) {
    case 'Increment':
      return state + 1
    case 'Decrement':
      return state - 1
    default:
      return state
  }
}
let store = createStore(demo)

store.dispatch({ type: 'Increment' })
store.dispatch({ type: 'Decrement' })

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <div>
        <button onClick={() => store.dispatch({ type: 'Increment' })}>Increment</button>
      <button onClick={()=>store.dispatch({type:'Decrement'})}>Decrement</button>
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
);
