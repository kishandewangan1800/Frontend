import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    desktop: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        width:'100px'
    },
    mobile: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
        width:'100px'
        
    },
    main: {
        [theme.breakpoints.up('xs')]: {
            paddingBottom: '5%',
        },
        width:'100px'
    },
    last: {
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(3),
            paddingBottom: '200px',
        },
    },
    grid: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));