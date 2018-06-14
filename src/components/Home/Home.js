import React from 'react';
import CardList from '../Card/CardList';

class Home extends React.Component {
    componentWillMount() {
        const { getCandidates } = this.props;
        getCandidates();
    }

    render() {
        const { reports, isLoading } = this.props;
        return (
            <CardList cards={reports}/>
        );
    }
};

export default Home;