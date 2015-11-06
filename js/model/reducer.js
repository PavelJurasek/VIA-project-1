import {combineReducers} from 'redux';
import chartReducer from './chartReducer';
import mapReducer from './mapReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
    map: mapReducer,
    chart: chartReducer,
    weather: weatherReducer
});

// export default (state = {}, action) => {
//     return {
//         counter: counterReducer(state.counter, action),
//         // ...
//     };
// };
