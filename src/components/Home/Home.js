import React from 'react';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';
import LayoutContainer from '../../components/Shared/LayoutContainer';
import CardList from '../Card/CardList';

class Home extends React.Component {
    componentWillMount() {
        const { getCandidates } = this.props;
        getCandidates();
    }

    render() {
        const { reports, isLoading } = this.props;
        return (
            <React.Fragment>
                <SecondaryNavbar />
                <LayoutContainer>
                    <CardList cards={reports}/>
                </LayoutContainer>
            </React.Fragment>
        );
    }
};

export default Home;