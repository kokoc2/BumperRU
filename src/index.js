import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './redux/store';


let rerender=(state)=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App state={Store.getState()} dispatch={Store.dispatch.bind(Store)} />
  </React.StrictMode>
);
}

rerender(Store.getState());


/*Store.subscribe(()=>{
  let state = Store.getState()
  rerender(state);
})
*/
