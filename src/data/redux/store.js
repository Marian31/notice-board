import {combineReducers, createStore} from "redux";
import {NoticeBoardReducer} from "./noticeBoard/NoticeBoardReducer";
import {NoticeReducer} from "./notice/NoticeReducer";

const rootReducers = combineReducers({
    board: NoticeBoardReducer,
    tempNotice: NoticeReducer,
});

export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());