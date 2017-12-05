import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css'
//Used for React-Route
import Home from '../../views/Home/Home';
import Advert from '../../views/Advert/Advert';
import ProfilEdit from '../../views/ProfilEdit/ProfilEdit';
import ProfilNotification from '../../views/ProfilNotification/ProfilNotification';
import Guide from '../../views/Guide/Guide';
import ForCompanies from '../../views/ForCompanies/ForCompanies';
import Logout from '../../views/Logout/Logout';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/advert' component={Advert} />
              <Route path='/guide' component={Guide} />
              <Route path='/for-companies' component={ForCompanies} />
              <Route path='/logout' component={Logout} />
              <Route path='/profil/edit' component={ProfilEdit} />
              <Route path='/profil/notification' component={ProfilNotification} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}