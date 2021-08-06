import React from 'react';
import { Switch, useParams, Route } from 'react-router-dom';
import FilterCategory from '../Layouts/FilterCategory';
import PageLayout from '../Layouts/PageLayout';

function RouterCategory(props) {
    const { flug } = useParams();
    console.log(flug);
    return (
        <Switch>
            <Route
                exact
                path={`/${flug}.cat:id`}
                render={(props) => { return <PageLayout content={<FilterCategory {...props} />} /> }}
            />
        </Switch>
    );
}

export default RouterCategory;