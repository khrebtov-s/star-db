import React from 'react';
import ItemList from '../item-list';
import {WithData} from '../hoc-halpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
return(props)=> {
    return (
        <Wrapped {...props}>
        {fn}
        </Wrapped>
    )
    }
};

const LIstWithChildren = withChildFunction(
    ItemList, 
    ({name}) => <span>{name}</span>
)

const PersonList = WithData(LIstWithChildren, getAllPeople);
const PlanetList = WithData(LIstWithChildren, getAllStarships);
const StarshipList = WithData(LIstWithChildren, getAllPlanets);

export {
    PersonList,
    PlanetList,
    StarshipList
}