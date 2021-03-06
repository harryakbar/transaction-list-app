import React, { useReducer } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css';
import List from './modules/list';
import Detail from './modules/detail';
import { TransactionList } from './modules/list/types';
import { TransactionListContext } from './context/context';

function reducer(state: TransactionList, action: any) {
  switch (action.type) {
    case 'load':
      return action.payload;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <div className="App">
      <TransactionListContext.Provider value={[state, dispatch]}>
        <Router>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/:id" component={Detail} />
            <Route path="*" component={()=> <h1>Not Found</h1>} />
          </Switch>
        </Router>
      </TransactionListContext.Provider>
    </div>
  );
}

export default App;
