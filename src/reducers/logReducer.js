import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS,
} from '../actions/types';

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
            console.log(action.payload, '123');
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
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                // action.payload는 삭제될 log의 id를 나타내므로,
                // 이와 다른 id값을 가진(조건문의 true) 로그는 logs 배열로 리턴된다.
                loading: false
            };

        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
                // action.payload는 삭제될 log의 id를 나타내므로,
                // 이와 다른 id값을 가진(조건문의 true) 로그는 logs 배열로 리턴된다.
            };
        case LOGS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload,
                loading: true
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
            };

        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload,
            };
        default:
            return state;
    }
};

