import React from 'react';
import { Route } from 'react-router-dom';
import Corelayout from './layouts/Corelayout';
import Home from './components/Home/Home';
import Lists from './components/Lists/Lists';

const App = () => (
    <Corelayout>
        <Route exact path="/" component={Home} />
        <Route exact path="/lists" component={Lists} />
    </Corelayout>
);

export default App;