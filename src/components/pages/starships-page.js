import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../row';
import { withRouter } from 'react-router-dom';


const StarshipsPage = ({ history }) => {


    return (
        <StarshipList onItemSelected={(itemId) => {
            history.push(`/starships/${itemId}`);
        }} />
    );

}

export default withRouter(StarshipsPage);