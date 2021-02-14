import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG} from './types';

// export const getLogs = () =>{
//     return async (dispatch) => {
//         setLoading();
//
//         const res = await fetch('/logs');
//         const data = await res.json();
//
//         dispatch({
//             type:GET_LOGS,
//             payload: data
//         });
//     };
// };

// Get logs from server, 비동기로 처리해야한다.
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS, // 2) 데이터를 할당받는다.
            payload: data // 1) 분기 역할을 해주고,
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

// ADD new Log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        // POST 해버린다
        const res = await fetch('/logs', {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                "Content-Type" : 'application/json'
            }
        });
        const data = await res.json();
        console.log(data, "data")

        dispatch({
            type: ADD_LOG, // 1) 분기 역할을 해주고,
            payload: data // 2) 데이터를 할당받는다.
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

// set loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}