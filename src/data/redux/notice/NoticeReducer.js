import Notice from "../../immutableEntities/Notice";
import Immutable from 'immutable'

const defaultState = new Immutable.OrderedMap({
        notice: new Notice()
    }
);

export const NoticeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case NoticeTypeActions.SET_TITLE:
            return state.setIn(['notice', 'title'], action.payload);

        case NoticeTypeActions.SET_CONTENT:
            return state.setIn(['notice', 'content'], action.payload);

        case NoticeTypeActions.SET_NEW:
            return state.update('notice', notice => action.payload ? action.payload : new Notice());
    }
    return state;
};

export const NoticeTypeActions = {
    SET_TITLE: 'SET_TITLE',
    SET_CONTENT: 'SET_CONTENT',
    SET_NEW: 'SET_NEW',
};