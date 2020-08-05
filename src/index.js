import React from 'react'
import ReactDom from 'react-dom'
import {Router} from "react-router";
import CustomHistory from "./CustomHistory";
import {Provider} from "react-redux";
import {store} from "./data/redux/store";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./Theme";
import RootContainer from "./pages/root/containers/RootContainer";
import {BrowserRouter} from "react-router-dom";
import Root from "./pages/root/Root";


document.getElementById('preloader-div').remove();

ReactDom.render(
    <BrowserRouter history={CustomHistory}>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
            <Root/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));