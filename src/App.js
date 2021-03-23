import React from 'react';
import Home from './Pages/Home';
import Connection from './Pages/Connection';
import Defi from './Pages/Defi';
import { Route, Switch } from 'react-router-dom';
class App extends React.Component {


  render() {

    return (
      <main>
        <Switch>
          <Route path = "/" component = {Home} exact />
          <Route path = "/Login" component = {Connection} />
          <Route path = "/Defi/:id" component = {Defi} />
        </Switch>
      </main>
    )
  }
}
export default App
