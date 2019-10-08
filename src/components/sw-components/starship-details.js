import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';
import { withSwapiService } from '../hoc-halpers';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails >
    );
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage,
    }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);


    // export default StarshipDetails;