import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG} from '../actions/types';
const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
} // initial states for Log
export default (state = initialState, action) => { // eslint-disable-next-line
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };
        case ADD_LOG:
            console.log(action.payload,'123');
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case LOGS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload,
                loading: true
            };
        default:
            return state;
    }
};

