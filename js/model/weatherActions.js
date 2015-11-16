import config from '../config';
import $ from 'jquery';
import {selectQuery, selectShowNDays, selectUnit} from './weatherSelectors';
import {updateChart} from './chartActions';
import {updateMap} from './mapActions';

export const SEARCH = 'WEATHER_SEARCH';
export const UPDATE_SHOW_N_DAYS = 'UPDATE_SHOW_N_DAYS';
export const UPDATE_UNIT = 'UPDATE_UNIT';
export const SAVE_DATA = 'WEATHER_SAVE_DATA';

export function search(query) {
    return {
        type: SEARCH,
        query,
    };
}

export function updateShowNDays(days) {
    return {
        type: UPDATE_SHOW_N_DAYS,
        days,
    };
}

export function updateUnit(unit) {
    return {
        type: UPDATE_UNIT,
        unit,
    };
}

export function submitSearch() {
    return (dispatch, getState) => {
        const state = getState();
        const query = selectQuery(state);
        const cnt = selectShowNDays(state);
        const unit = selectUnit(state);

        if (query == null) {
            return;
        }

        const url = config.apiUrl +
            '/weather?q=' + query +
            '&appid=' + config.apiKey +
            '&units=' + unit;

        $.getJSON(url, (data) => {
            dispatch(search(data.name));
            dispatch(saveData(data));
        });

        const forecastUrl = config.apiUrl +
                '/forecast/daily?q=' + query +
                '&cnt=' + cnt +
                '&appid=' + config.apiKey +
                '&units=' + unit;

        $.getJSON(forecastUrl, (data) => {
            dispatch(updateChart(data));
            dispatch(updateMap({
                lat: data.city.coord.lat,
                lng: data.city.coord.lon,
            }));
        });
    };
}

export function saveData(data) {
    return {
        type: SAVE_DATA,
        data,
    };
}
