import React, { useEffect, useState } from 'react';
import { Switch, useParams, Route } from 'react-router';
import FilterCategory from '../Layouts/FilterCategory';
import PageLayout from '../Layouts/PageLayout';

function RouterCategory(props) {
    const { flug } = useParams();
    console.log(flug);
    return (
        <Switch>
            <Route
                exact
                path={`/${flug}/:id`}
                render={(props) => { return <PageLayout content={<FilterCategory {...props} />} /> }}
            />
        </Switch>
    );
}

export default RouterCategory;