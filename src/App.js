import React from 'react';
import { Route } from 'react-router-dom';
import Corelayout from './layouts/Corelayout';
import HomeContainer from './components/Home/HomeContainer';
import ListsContainer from './components/Lists/ListsContainer';
import ReportContainer from './components/Report/ReportContainer';

const App = () => (
    <Corelayout>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/lists" component={ListsContainer} />
        <Route exact path="/lists/report/:id" component={ReportContainer} />
    </Corelayout>
);

export default App;