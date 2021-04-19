import React, { useEffect, useState } from 'react';
import { Switch, useParams, Route } from 'react-router';
import PageLayout from '../Layouts/PageLayout';
import ProductScreen from '../Layouts/ProductScreen';

function RouterProduct(props) {
    const { product } = useParams();

    return (
        <Switch>
            <Route
                exact
                path={`/${product}/:id`}
                render={(props) => { return <PageLayout content={<ProductScreen {...props} />} /> }}
            />

        </Switch>
    );
}

export default RouterProduct;