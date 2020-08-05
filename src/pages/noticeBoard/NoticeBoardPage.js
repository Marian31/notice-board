import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import NoNoticesYet from "./NoNoticesYet";
import NoticeItem from "./NoticeItem";
import NoticeDialog from "./NoticeDialog";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Notice from "../../data/immutableEntities/Notice";

const styles = makeStyles(theme => ({
        container: {
            width: '100%',
            height: '100%',
        },
        board: {
            backgroundColor: theme.palette.primary.secondary,
            overflowY: 'auto',
            padding: '25px 0',
        },
        addButton: {
            color: 'blue',
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            padding: 0,
        }, icon: {
            width: '50px',
            height: '50px',
        }
    })
);

const NoticeBoardPage = (props) => {
    const classes = styles();

    const [openDialog, setOpenDialog] = useState(false);
    const [edit, setEdit] = useState(false);

    const onAddNotice = () => {
        props.setNew(new Notice());
        setOpenDialog(true);
    };

    const onEditNotice = (notice) => {
        setEdit(true);
        setOpenDialog(true);
        props.setNew(new Notice(notice));
    };
    return (
        <Grid container justify='center' alignItems='center' direction='column' className={classes.container}>
            <Grid item>
                <Typography variant='h3'>
                    Дошка оголошень
                </Typography>

            </Grid>
            <Grid container xs={10} justify='center' item className={classes.board}>
                {!props.notices.length ?
                    <NoNoticesYet onClick={() => onAddNotice()}/>
                    : <Grid item xs={10}>
                        {props.notices.map((notice, index) =>
                            <NoticeItem notice={notice} key={index}
                                        onAddLike={() => props.addLike(notice.id)}
                                        onEditNotice={() => onEditNotice(notice)}
                                        onDeleteNotice={() => props.deleteNotice(notice.id)}
                            />
                        )}
                    </Grid>
                }
            </Grid>
            <NoticeDialog open={openDialog}
                          edit={edit}
                          notice={props.currentNotice}
                          addNotice={props.addNotice}
                          editNotice={props.editNotice}
                          onTitleChange={props.setTitle}
                          onContentChange={props.setContent}
                          setOpenDialog={setOpenDialog}
                          setEdit={setEdit}
            />
            <IconButton className={classes.addButton} onClick={() => onAddNotice()}>
                <AddCircleIcon className={classes.icon}/>
            </IconButton>
        </Grid>
    );
};

export default NoticeBoardPage;