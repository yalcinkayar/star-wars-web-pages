import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';

import HomePage from './pages/Home';
import PeoplePage from './pages/People';
import FilmsPage from './pages/Films';
import HomeDetailItem from './components/HomeDetailItem';
import FilmDetailItem from './components/FilmDetailItem';
import SpeciesPage from './pages/Species';
import VehiclePage from './pages/Vehicles';
import StarshipPage from './pages/Starships';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route component={HomePage} path={"/home"} />
                    <Route component={PeoplePage} path={"/people"} />
                    <Route component={FilmsPage} path={"/films"} />
                    <Route component={FilmDetailItem} path={"/filmdetailitem"} />
                    <Route component={HomeDetailItem} path={"/homedetailitem"} />
                    <Route component={SpeciesPage} path={"/species"} />
                    <Route component={VehiclePage} path={"/vehicles"} />
                    <Route component={StarshipPage} path={"/starships"} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;