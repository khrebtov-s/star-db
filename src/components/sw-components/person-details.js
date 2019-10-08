import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-halpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props} >
            {/* itemId={itemId}
         getData={getData}
         getImageUrl={getImageUrl} > */}
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails >
    );
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);