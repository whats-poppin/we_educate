import {createMuiTheme, responsiveFontSizes} from "@material-ui/core";
import {colors} from "./constants";

export const theme = responsiveFontSizes(createMuiTheme({
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
        palette: {
            primary: {
                main: colors.greyWhite,
            },
            secondary: {
                main: colors.darkBrown,
            },
        },
    })
);