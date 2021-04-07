import {GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR, GET_LOGS} from "./types";
// import {setLoading} from "./logActions";

//GET techs from server
export const getTechs = () =>{
    return async (dispatch) => {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type:GET_TECHS,
            payload: data
        });
    };
};

//Add techs from server
export const addTechs = (tech) =>{
    return async (dispatch) => {
        setLoading();

        const res = await fetch('/techs', {
            method: 'POST', // 작은 따옴표 써야해??? 큰따옴표쓰니까 에러떠뿌넹
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type:ADD_TECH,
            payload: data
        });
    };
};


// set loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}