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
    swapiService: DummySwapiService();
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onServiceChange = () => {
    console.log('Добился своего!')
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    // const { getPerson, getStarship, getPersonImage, getPlanetImage, getStarshipImage } = this.swapiService;

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;
    console.log('testtest')
    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <div className="stardb-app">
          <Header onServiceChange={this.onServiceChange} />

          <PersonDetails itemId={11} />

          <PlanetDetails itemId={5} />

          <StarshipDetails itemId={9} />

          <PersonList />

          <StarshipList />

          <PlanetList />


          {/* <Row
          left = {personDetails}
          right = {starshipDetails}/> */}

        </div>
      </SwapiServiceProvider>
    );
  }
}