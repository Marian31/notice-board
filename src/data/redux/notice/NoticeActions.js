import {NoticeTypeActions} from "./NoticeReducer";

export const setTitle = title => ({
    type: NoticeTypeActions.SET_TITLE,
    payload: title
});

export const setContent = content => ({
    type: NoticeTypeActions.SET_CONTENT,
    payload: content
});

export const setNew = (notice = undefined) => ({
    type: NoticeTypeActions.SET_NEW,
    payload: notice
});

