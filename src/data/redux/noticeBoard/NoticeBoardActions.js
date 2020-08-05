import {NoticeBoardActionTypes} from "./NoticeBoardReducer";

export const addNotice = notice => ({
    type: NoticeBoardActionTypes.ADD_NOTICE,
    payload: notice
});

export const editNotice = notice => ({
    type: NoticeBoardActionTypes.EDIT_NOTICE,
    payload: notice
});

export const deleteNotice = noticeId => ({
  type: NoticeBoardActionTypes.DELETE_NOTICE,
    payload: noticeId
});

export const addLike = noticeId => ({
    type: NoticeBoardActionTypes.ADD_LIKE,
    payload: noticeId,
});