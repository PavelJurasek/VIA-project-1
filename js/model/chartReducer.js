import * as chartActions from './chartActions';

export default (state = {}, action = null) => {
    if (action.type === chartActions.UPDATE_CHART) {
        return Object.assign({}, state, {
            data: action.data,
        });
    }

    return state;
};
