import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { fontSize } from '@mui/system';

const useStyles = makeStyles({
    footerTitle:{
        height:'70px',
        backgroundColor:'black',
        color:'white',
        fontSize:'16px',
        padding:'20px',
        textAlign:'center',
        fontFamily: "'Kalam', cursive",
    },
  });

const Footer = () => {

    const classes = useStyles()


  return <div className={classes.footerTitle}>
      <h4>
      Copyright © 2021 撿到寶.All rights reserved.
      </h4>
  </div>;
};

export default Footer;
