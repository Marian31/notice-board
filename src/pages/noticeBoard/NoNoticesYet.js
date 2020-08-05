import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";

const styles = makeStyles(theme => ({
        container: {
            width: '100%'
        },
        button: {
            backgroundColor: theme.palette.primary.main
        }
    })
);

const NoNoticesYet = (props) => {
    const classes = styles();
    return (
        <Grid container item justify='center' alignItems='center' direction='column' className={classes.container}
              spacing={3}>
            <Grid item>
                <Typography>
                    No notice yet
                </Typography>
            </Grid>
            <Grid>
                <Button className={classes.button} onClick={props.onClick}>
                    Add notice
                </Button>
            </Grid>
        </Grid>
    )
};
export default NoNoticesYet;