import React from 'react';
import Home from './Pages/Home';
import Connection from './Pages/Connection';
import { Route, Switch } from 'react-router-dom';
class App extends React.Component {


  render() {

    return (
      <main>
        <Switch>
          <Route path = "/" component = {Home} exact />
          <Route path = "/Login" component = {Connection} />
        </Switch>
      </main>
    )
  }
}
export default App
