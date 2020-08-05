import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";

const styles = makeStyles(theme => ({
        container: {
            height: '100%',
        },
        button: {
            backgroundColor: theme.palette.primary.main
        }
    })
);

const LandingPage = (props) => {
    const classes = styles();
    return (
        <Grid container justify='center' alignItems='center' direction='column' className={classes.container}
              spacing={3}>
            <Grid item>
                <Typography variant='h4'>
                    Вітаємо на дошці оголошень
                </Typography>
            </Grid>
            <Grid item>
                <Button component={Link} to={FrontendRoutes.NOTICES} className={classes.button}>
                    Перейти до оголошень
                </Button>
            </Grid>
        </Grid>
    );
};

export default LandingPage;