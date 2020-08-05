import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = makeStyles(theme => ({
        container: {
            width: '100%',
            backgroundColor: 'grey',
            border: 'solid',
            margin: '10px 0',
        },
    like:{
           padding: '0 5px'
    },
        button: {
            padding: '5px 20px',
        }
    })
);

const NoticeItem = (props) => {
    const classes = styles();
    return (
        <Grid item container direction='column' className={classes.container} spacing={2}>
            <Grid item>
                <Typography variant='h5'>{props.notice.title} </Typography>
            </Grid>
            <Grid item>
                <Typography> {props.notice.content}</Typography>
            </Grid>
            <Grid item container justify='space-between'>
                <Grid item>
                    <IconButton onClick={props.onAddLike} className={classes.button}>
                        <Typography className={classes.like}>{props.notice.likes}</Typography>
                        <ThumbUpIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={props.onEditNotice} className={classes.button}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={props.onDeleteNotice} className={classes.button}>
                        <DeleteIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
};
export default NoticeItem;