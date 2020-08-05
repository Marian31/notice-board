import Immutable from 'immutable'
import {v4 as uuidv4} from 'uuid';
import Notice from "../../immutableEntities/Notice";

const defaultState = new Immutable.OrderedMap({
    notices: new Immutable.List()
});

export const NoticeBoardReducer = (state = defaultState, action) => {
    let getIndex = (id) => state.get('notices').findIndex(item => item.id === id);

    switch (action.type) {
        case NoticeBoardActionTypes.ADD_NOTICE: {
            console.log('add');
            return state.update('notices', notices => notices.push({...action.payload, id: uuidv4()}));
        }

        case NoticeBoardActionTypes.EDIT_NOTICE: {
            console.log('edit');
            return state.updateIn(['notices', getIndex(action.payload.id)], notice => new Notice(action.payload));
        }
        case NoticeBoardActionTypes.DELETE_NOTICE:
            return state.update('notices', notices => notices.filter(notice => notice.id !== action.payload));

        case NoticeBoardActionTypes.ADD_LIKE: {
            return state.updateIn(['notices', getIndex(action.payload), 'likes'], value => value + 1);
        }
    }
    return state;
};

export const NoticeBoardActionTypes = {
    ADD_NOTICE: 'ADD_NOTICE',
    EDIT_NOTICE: 'EDIT_NOTICE',
    DELETE_NOTICE: 'DELETE_NOTICE',
    ADD_LIKE: 'ADD_LIKE',

};