import * as weatherActions from './weatherActions';

const defaultData = {
    query: null,
    weather: null,
    showNDays: 5,
    unit: 'metric',
};

export default (state = defaultData, action = null) => {
    if (action.type === weatherActions.SEARCH) {
        return Object.assign({}, state, {
            query: action.query,
        });
    }

    if (action.type === weatherActions.SAVE_DATA) {
        return Object.assign({}, state, {
            weather: action.data,
        });
    }

    if (action.type === weatherActions.UPDATE_SHOW_N_DAYS) {
        return Object.assign({}, state, {
            showNDays: action.days,
        });
    }

    if (action.type === weatherActions.UPDATE_UNIT) {
        return Object.assign({}, state, {
            unit: action.unit,
        });
    }

    return state;
};
