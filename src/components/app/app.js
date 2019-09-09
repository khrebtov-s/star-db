import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";
import Row from '../row';
import ItemDetails, { Record } from "../item-details/item-details";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
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

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const { getPerson, getStarship, getPersonImage, getPlanetImage, getStarshipImage } = this.swapiService;

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
    
    const personDetails = (
     <ItemDetails itemId={11}
      getData = {getPerson}
      getImageUrl = {getPersonImage}> 
        <Record field = "gender" label = "Gender"/>
        <Record field = "eyeColor" label = "Eye Color"/>
      </ItemDetails>
    )
   

    const starshipDetails = (
      <ItemDetails itemId={3}
      getData = {getStarship}
      getImageUrl = {getStarshipImage}/> 
    ); 

    return (
      <div className="stardb-app">
        <Header />
        {/* { planet } */}

        {/* <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
         
        </div> */}
        <Row
          left = {personDetails}
          right = {starshipDetails}/>


        {/* <PeoplePage /> */}
 
        {/* <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData = {this.swapiService.getAllPlanets} 
              renderItem = {(item) => item.name}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships} 
              renderItem = {(item) => `${item.name}`}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div> */}

      </div>
    );
  }
}