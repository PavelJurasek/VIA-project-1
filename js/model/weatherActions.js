import config from '../config';
import $ from 'jquery';
import {selectQuery} from './weatherSelectors';
import {updateChart} from './chartActions';
import {updateMap} from './mapActions';

export const SEARCH = 'WEATHER_SEARCH';
export const SAVE_DATA = 'WEATHER_SAVE_DATA';

export function search(query) {
    return {
        type: SEARCH,
        query,
    };
}

export function submitSearch() {
    return (dispatch, getState) => {
        const state = getState();
        const query = selectQuery(state);
        const cnt = 10;

        if (query == null) {
            return;
        }

        const url = config.apiUrl +
            '/weather?q=' + query +
            '&appid=' + config.apiKey +
            '&units=metric';

        $.getJSON(url, (data) => {
            dispatch(search(data.name));
            dispatch(saveData(data));
        });

        const forecastUrl = config.apiUrl +
                '/forecast/daily?q=' + query +
                '&cnt=' + cnt +
                '&appid=' + config.apiKey +
                '&units=metric';

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
