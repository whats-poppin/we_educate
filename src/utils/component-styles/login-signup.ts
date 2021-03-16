import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';


export const useLoginSignupStyles = makeStyles((theme: Theme) =>
    createStyles({
        h1: {
            fontWeight: 800
        },
        rootContainer: {
            fontFamily: 'Montserrat',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '768px',
            maxWidth: '100%',
            minHeight: '480px',
            margin: 'auto',
            // alignItems: 'center', 
            // justifyContent: 'center',
            overflow: 'hidden',
            '& > *': {
                boxSizing: 'border-box',
                // margin: theme.spacing(1),
                width: '50%',
                padding: '0'
            },
        },
        formContainer: {
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: '0',
            height: '480px',
            transition: 'all 0.6s ease-in-out',
            display: 'inline flex',
        },
        form: {
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '0 ',
            height: '100%',
            textAlign: 'center'
        },
        socialContainer: {
            display: 'inline-flex'
        },
        social: {
            border: '1px solid #DDDDDD',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 5px',
            height: '40px',
            width: '40px',
            color: '#333333'
        },
        input: {
            width: '15rem'
        },
        button: {
            borderRadius: '20px',
            backgroundColor: '#FF4B2B',
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: ' 12px 45px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'transform 80ms ease-in',
            margin: '15px'
        },
        overlayContainer: {
            position: 'absolute',
            top: '0',
            left: '50%',
            width: '50%',
            height: '100%',
            overflow: 'hidden',
            transition: 'transform 0.6s ease-in-out',
            zIndex: 100
        },
        overlay: {
            background: 'linear-gradient(to right, #FF4B2B, #FF416C)',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '0 ',
            height: '100%',
            textAlign: 'center',
            backgroundSize: 'cover',
            backgroundPosition: '0 0',
            color: '#FFFFFF',
            position: 'relative',
            transform: 'translateX(0)',
            transition: 'transform 0.6s ease-in-out'
        },
        overlayLeft: {
            transform: 'translateX(-20%)'
        },
        overlayPanel: {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '0 40px',
            textAlign: 'center',
            top: 0,
            height: '100%',
            width: '50%',
            transform: 'translateX(0)',
            transition: 'transform 0.6s ease-in-out',
        },
        overlayRight: {
            right: '0',
            transform: 'translateX(0)'
        },
        ghost: {
            backgroundColor: 'transparent'
        }
    }),
);

