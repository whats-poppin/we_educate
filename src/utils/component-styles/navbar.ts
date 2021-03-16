import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

export const useNavbarStyles = makeStyles((theme: Theme) =>
    createStyles({


        brandLogo :{
            height: '3.6rem',
            width: '8rem',
            margin: '0 1rem 0 0',
            padding: '10px'
        },

        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            // paddingLeft: '20rem',
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
        },
        inputRoot: {
            marginLeft: '20rem',
            color: 'inherit',
        },
        inputInput: {

            marginLeft: '20rem',
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        }
    }),
);