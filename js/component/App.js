import React from 'react';
import {connect} from 'react-redux';
import Weather from './Weather';
import Chart from './Chart';
import Map from './Map';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

    click() {
        const dispatch = this.props.dispatch;
    }

    render() {
        return <div className="container">
            <h1>Weather forecast</h1>
            <Weather />
            <Chart />
            <Map />
        </div>;
    }

}

App = connect(function (state) {
    return {};
})(App);

export default App;
