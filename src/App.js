import React from 'react';
import { Route } from 'react-router-dom';
import Corelayout from './layouts/Corelayout';
import Home from './components/Home/Home';
import ListsContainer from './components/Lists/ListsContainer';
import Report from './components/Report/Report';

const App = () => (
    <Corelayout>
        <Route exact path="/" component={Home} />
        <Route exact path="/lists" component={ListsContainer} />
        <Route exact path="/report" component={Report} />
    </Corelayout>
);

export default App;