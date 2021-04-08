import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

// redux 에서는 한 애플리케이션 당 하나의 store를 만들게 되고, store 내부에는 현재의 앱 상태와 리듀서가 들어있고, 추가적으로 몇 가지 내장 함수들이 있다.