import {GET_LOGS, SET_LOADING, LOGS_ERROR} from './types';

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

// Get logs from server
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

// set loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}