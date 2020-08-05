import React from 'react'
import Root from "../Root";
import {addNotice, deleteNotice, editNotice} from "../../../data/redux/noticeBoard/NoticeBoardActions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    state: state
});
const mapDispatchToProps = ({
    addNotice,
    editNotice,
    deleteNotice
});

export default connect(mapStateToProps, mapDispatchToProps)(Root)