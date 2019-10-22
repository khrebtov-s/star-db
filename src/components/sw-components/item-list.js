import React from 'react';
import ItemList from '../item-list';
import { WithData, withSwapiService } from '../hoc-halpers';

const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

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

const PersonList = withSwapiService(mapPersonMethodToProps)(
    WithData(
        withChildFunction(renderName)(
            ItemList)));
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
    WithData(
        withChildFunction(renderName)(
            ItemList)));
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
    WithData(
        withChildFunction(renderModelAndName)(
            ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
}