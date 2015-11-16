import React from 'react';
import {connect} from 'react-redux';
import Weather from './Weather';
import Chart from './Chart';
import Map from './Map';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

    render() {
        return <div className="container">
            <h1>Weather forecast</h1>

            <div className="row">
                <div className="col-lg-6">
                    <Weather />
                </div>
                <div className="col-lg-6">
                    <Map />
                </div>
                <div className="col-lg-12">
                    <Chart />
                </div>
            </div>
        </div>;
    }

}

App = connect(function (state) {
    return {};
})(App);

export default App;
