import React from 'react';
import Home from './Pages/Home';
import Connection from './Pages/Connection';
import Defi from './Pages/Defi';
import Favoris from './Pages/Favoris';
import Compte from './Pages/Compte';
import Badges from './Pages/Badges';
import Inscription from './Pages/Inscription';
import DefiCreation from './Pages/DefiCreation';
import { Route, Switch } from 'react-router-dom';
class App extends React.Component {


  render() {

    return (
      <main>
        <Switch>
          <Route path = "/" component = {Home} exact />
          <Route path = "/Login" component = {Connection} />
          <Route path = "/Defi/:id" component = {Defi} />
          <Route path = "/Favoris" component = {Favoris} />
          <Route path = "/Compte" component = {Compte} />
          <Route path = "/Badges" component = {Badges} />
          <Route path = "/Inscription" component = {Inscription} />
          <Route path = "/DefiCreation" component = {DefiCreation} />
        </Switch>
      </main>
    )
  }
}
export default App
