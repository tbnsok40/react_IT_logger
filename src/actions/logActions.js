import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG} from './types';

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
                "Content-Type": 'application/json'
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


// Delete log from server (db.json)
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });
        dispatch({
            type: DELETE_LOG, // 2) 데이터를 할당받는다.
            payload: id // 1) 분기 역할을 해주고,
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

// Set current Log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

// Clear current Log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    }
}


// Update log on server
export const updateLog = log => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers:{
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG, // 2) 데이터를 할당받는다.
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