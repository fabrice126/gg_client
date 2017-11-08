import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './App.css'
//Used for React-Route
import Home from '../../views/Home/Home';
import Profil from '../../views/Profil/Profil';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Menu />
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/profil' component={Profil} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
