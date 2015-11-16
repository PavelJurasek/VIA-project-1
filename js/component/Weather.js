import React from 'react';
import {connect} from 'react-redux';
import {search, submitSearch, updateShowNDays, updateUnit} from '../model/weatherActions';
import * as selectors from '../model/weatherSelectors'
import $ from 'jquery';
import config from '../config';

//import 'bootstrap-slider/dist/css/bootstrap-slider.min.css'
//import 'bootstrap-slider';

class Weather extends React.Component {

    changeQuery(e) {
        const dispatch = this.props.dispatch;
        dispatch(search(e.target.value));
    }

    submit() {
        const dispatch = this.props.dispatch;
        dispatch(submitSearch());
    }

    changeCnt(e) {
        const dispatch = this.props.dispatch;

        dispatch(updateShowNDays(e.target.value));
        dispatch(submitSearch());
    }

    changeUnit(e) {
        const dispatch = this.props.dispatch;

        dispatch(updateUnit(e.target.value));
        dispatch(submitSearch());
    }

    render() {
        const metric = {}, imperial = {};

        if (this.props.unit === 'metric') {
            metric.defaultChecked = 'defaultChecked';
        } else {
            imperial.defaultChecked = 'defaultChecked';
        }

        return <div>
            Place ({this.props.query}):
            <form onSubmit={this.submit.bind(this)}>
                <div className="form-group">
                    <input
                        type="text"
                        className="input form-control"
                        onChange={this.changeQuery.bind(this)}
                    />
                </div>

                <div className="form-group">
                    <input className="form-control" type="range" min="2" max="16" step="1" onMouseUp={this.changeCnt.bind(this)} defaultValue={this.props.showNDays} />
                </div>

                <div className="form-group">
                    <label htmlFor="metric" className="radio-inline">
                        <input id="metric" type="radio" name="units" value="metric" {...metric} onChange={this.changeUnit.bind(this)} />
                        ℃
                    </label>
                    <label htmlFor="imperial" className="radio-inline">
                        <input id="imperial" type="radio" name="units" value="imperial" {...imperial} onChange={this.changeUnit.bind(this)} />
                        ℉
                    </label>
                </div>

                <input
                    type="button"
                    className="btn btn-primary"
                    value="Search"
                    onClick={this.submit.bind(this)}
                />
            </form>

            {this.props.temperature && <p>
                Current temperature: {this.props.temperature}{this.props.unit === 'metric' ? '℃' : '℉'}
            </p>}
        </div>;
    }

}

Weather = connect(state => {
    //$('[type=range]').slider();

    return {
        query: selectors.selectQuery(state),
        temperature: selectors.selectTemperature(state),
        showNDays: selectors.selectShowNDays(state),
        unit: selectors.selectUnit(state),
    }
})(Weather);

export default Weather;
