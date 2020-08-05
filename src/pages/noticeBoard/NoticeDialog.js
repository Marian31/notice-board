import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const NoticeDialog = (props) => {
    console.log(props);
    const [titleTouched, setTitleTouched] = useState(false);
    const [contentTouched, setContentTouched] = useState(false);
    const nonEmpty = field => !!field ? undefined : 'Should not be empty';
    const titleError = nonEmpty(props.notice.title);
    const contentError = nonEmpty(props.notice.content);

    const onClose = () => {
        setContentTouched(false);
        setTitleTouched(false);
        props.setOpenDialog(false);
        props.setEdit(false);

    };

    const onCreate = () => {
        if (!titleError && !contentError) {
            props.addNotice(props.notice);
            onClose()
        }
    };

    const onEdit = () => {
        if (!titleError && !contentError) {
            props.editNotice(props.notice);
            onClose()
        }
    };

    return (
        <Dialog open={props.open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Cтворіть нове оголошення</DialogTitle>
            <DialogContent>
                <TextField autoFocus
                           margin="dense"
                           name='title'
                           label="tittle"
                           value={props.notice.title}
                           onChange={e => { setTitleTouched(true);
                               props.onTitleChange(e.target.value)
                           }}
                           error={titleTouched && titleError}
                           helperText={titleTouched ? titleError : undefined}
                           fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name='content'
                    label="Content"
                    value={props.notice.content}
                    onChange={e => {
                        setContentTouched(true);
                        props.onContentChange(e.target.value);
                    }}
                    error={contentTouched && contentError}
                    helperText={contentTouched ? contentError : undefined}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()} color="primary">
                     Cancel
                </Button>
                <Button onClick={() => props.edit ? onEdit() : onCreate()} color="primary">
                    {props.edit ? 'Save' : 'Create'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NoticeDialog;