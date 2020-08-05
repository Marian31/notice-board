import {connect} from "react-redux";
import NoticeBoardPage from "../NoticeBoardPage";
import {addLike, addNotice, deleteNotice, editNotice} from "../../../data/redux/noticeBoard/NoticeBoardActions";
import {setContent, setNew, setTitle} from "../../../data/redux/notice/NoticeActions";

const mapStateToProps = state => ({
    notices: state.board.get('notices').toJS(),
    currentNotice: state.tempNotice.get('notice').toJS(),
});

const mapDispatchToProps = {
    addNotice,
    editNotice,
    deleteNotice,
    addLike,
    setTitle,
    setContent,
    setNew,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoticeBoardPage)