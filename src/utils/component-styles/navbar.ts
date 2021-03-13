import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useNavbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        brandLogo :{
            height: '3.6rem',
            width: '8rem',
            margin: '0 1rem 0 0',
            padding: '10px'
        },

    }),
);