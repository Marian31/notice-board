import React from "react";
import Container from "@material-ui/core/Container";
import {Route, Switch} from "react-router";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import LandingPage from "../landing/LandingPage";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import NoticeBoardContainer from "../noticeBoard/containers/NoticeBoardContainer";

const styles = makeStyles(theme => ({
        container: {
            height: '100vh',
        },
    })
);

const Root = props => {
    const classes = styles();
    return (
        <Container maxWidth='lg'>
            <Grid container className={classes.container}>
                <Switch>
                    <Route exact path={FrontendRoutes.NOTICES} component={NoticeBoardContainer}/>
                    <Route exact path='/' component={LandingPage}/>
                </Switch>
            </Grid>
        </Container>
    )
};

export default Root;