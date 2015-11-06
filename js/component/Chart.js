import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../model/chartSelectors'

var LineChart = require("react-chartjs").Line;

class Chart extends React.Component {

    render() {
        var chart;
        if (this.props.data) {
            chart = <LineChart data={this.props.data} style={{width: '100%', height: '250px'}} redraw/>;
        }

        return <div>
            {chart}
        </div>;
    }

}

Chart = connect(state => ({
    data: selectors.selectData(state),
}))(Chart);

export default Chart;
