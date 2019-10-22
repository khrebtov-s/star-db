import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';

import ItemList from "../item-list/item-list";
// import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import Row from '../row';
import ItemDetails, { Record } from "../item-details/item-details";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';
import { SwapiServiceProvider } from '../swapi-service-context';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService(),
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {

      const Service = swapiService instanceof SwapiService ?
        DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    // const planet = this.state.showRandomPlanet ?
    //   <RandomPlanet /> :
    //   null;
    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <Router>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />

            <Route
              path="/"
              render={() => <h2 style={{ textAlign: 'center' }}>Welcome to star DB</h2>}
              exact={true} />
            <Route
              path="/people"
              component={PeoplePage} />
            <Route
              path="/planets"
              component={PlanetsPage} />
            <Route
              path="/starships"
              component={StarshipsPage}
              exact={true} />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                return < StarshipDetails itemId={match.params.id} />
              }} />

          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}