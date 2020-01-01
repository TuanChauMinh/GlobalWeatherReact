import React from 'react';
import logo from '../logo.svg';
import WeatherDetails from './WeatherDetail';
import Form from './Form';
class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <WeatherDetails />
                <Form />
            </div>

        );
    }
}

export default Home;