import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    spacing: 10,
    palette: {
        primary: {
            main: '#2F70ED',
            secondary: '#B7B7B7',
        },
        text: {
            primary: '#222222',
            secondary: '#B7B7B7',
            tertiary: '#2F70ED',
            disable: '#B7B7B7'
        },
        background: {
            primary: '#FFFFFF',
        },
    },
});
export default theme;