import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const useLoginSignupStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            position: 'relative',
            overflow: 'hidden',
            width: '768px',
            maxWidth: '100%',
            minHeight: '480px',
            margin: 'auto',

            '& > *': {
                boxSizing: 'border-box',
                margin: theme.spacing(1),
                width: '50ch',
            },
        },
        formContainer: {
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: '0',
            height: '100%',
            transition: 'all 0.6s ease-in-out'
        },
        form: {
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '0 50px',
            height: '100%',
            textAlign: 'center'
        },

    }),
);
