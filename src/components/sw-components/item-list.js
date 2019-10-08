import React from 'react';
import ItemList from '../item-list';
import { WithData, withSwapiService } from '../hoc-halpers';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({ name }) => <span>{name}</span>;

const renserModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

// const LIstWithChildren = withChildFunction(
//     ItemList,
//     ({ name }) => <span>{name}</span>
// )

const mapPersonMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = withSwapiService(
    WithData(
        withChildFunction(ItemList, renderName)),
    mapPersonMethodToProps);
const PlanetList = withSwapiService(
    WithData(
        withChildFunction(ItemList, renderName)),
    mapPlanetMethodsToProps);
const StarshipList = withSwapiService(
    WithData(
        withChildFunction(ItemList, renderName)),
    mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}