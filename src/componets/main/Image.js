import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Home from '../../images/home.png';
import homeMobile from '../../images/home_mobile.png';


const useStyles = makeStyles({
    bgImage:{
        width:'100%',
        minHeight:'810px',
        position:'relative',
        backgroundImage:`url(${Home})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'noRepeat',
        '@media (max-width:768px)':{
            backgroundImage:`url(${homeMobile})`,
            minHeight:'810px',
            backgroundPosition:'top',
        },
    },
    bgImageText:{
        display: 'block',
        fontFamily: "'Kalam', cursive",
        fontSize: '36px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        wordWrap: 'break-word',
        color: 'rgb(119, 117, 18)',
    },
  });

const Image = () => {
    const classes = useStyles();

    return (
        <div className={classes.bgImage} >
            <h1 className={classes.bgImageText}>
                Full of for. Full of Love
            </h1>
        </div>
    )
}

export default Image
