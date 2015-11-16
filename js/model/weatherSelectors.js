export function selectWeatherNamespace(state) {
    return state.weather;
}

export function selectQuery(state) {
    return selectWeatherNamespace(state).query;
}

export function selectTemperature(state) {
    const weatherData = selectWeatherNamespace(state).weather;

    return weatherData ? weatherData.main.temp : null;
}

export function selectShowNDays(state) {
    return selectWeatherNamespace(state).showNDays;
}

export function selectUnit(state) {
    return selectWeatherNamespace(state).unit;
}
