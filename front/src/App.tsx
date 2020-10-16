import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// import './App.css';
import Sheet from './Sheet'

import { store } from './Store'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path='/' component={() => <div>Hello World!</div>} exact={true}/>
                <Route path='/sheet/:id' component={Sheet}/>
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
