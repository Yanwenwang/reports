import React from 'react';
import { Route } from 'react-router-dom';
import Corelayout from './layouts/Corelayout';
import HomeContainer from './components/Home/HomeContainer';
import ListsContainer from './components/Lists/ListsContainer';
import Report from './components/Report/Report';

const App = () => (
    <Corelayout>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/lists" component={ListsContainer} />
        <Route exact path="/report" component={Report} />
    </Corelayout>
);

export default App;