import * as mapActions from './mapActions';

export default (state = {}, action = null) => {
    if (action.type === mapActions.UPDATE_MAP) {
        return Object.assign({}, state, {
            coordinates: action.coordinates,
        });
    }

    return state;
};
