import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import LinkListPage from './LinkListPage';
import CreateLink from './CreateLink'
import Header from './Header'
import Login from './Login';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' component={LinkListPage} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/create' component={CreateLink} />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}