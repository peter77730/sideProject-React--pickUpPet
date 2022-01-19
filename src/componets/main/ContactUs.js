import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link01 from '../../images/link01.png';
import Link02 from '../../images/link02.png';

const useStyles = makeStyles({
    joinTitle:{
        textAlign: 'left',
        font:' normal normal normal 24px/33px Noto Sans',
        letterSpacing: '0px',
        color: '#3A3A3A',
        opacity: 1,
        margin:0,
        '@media (max-width:768px)':{
            textAlign: 'center',
        },
    },
    joinMain:{
        textAlign: 'left',
        font: 'normal normal normal 16px/22px Noto Sans',
        letterSpacing: '0px',
        color: '#3A3A3A',
        opacity: 1,
        '@media (max-width:768px)':{
            textAlign: 'center',
        },
    },
    joinBtn:{
        width:'176px',
        height:'44px',
        backgroundColor:'white',
        borderRadius:'23px',
        cursor:'pointer',
        border:'1px solid #3A3A3A',
        opacity: 1, 
        fontSize:"20px",
        '&:hover':{
            backgroundColor:'#F9C745',
        },
    },
  });


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow:'none',
  }));



const ContactUs = () => {

    const classes = useStyles();




  return (
  <Box sx={{borderTop:'2px solid #F9C745',marginTop:'36px'}}>
  <Grid  sx={{ flexGrow: 1,width:'90vw',justifyContent:'center',alignItems:'center',marginTop:'36px'}} container spacing={0}>
    <Grid item xs={12} md={2}>
      <Item><img src={Link01} alt="" /></Item>
    </Grid>
    <Grid item xs={12} md={3}>
      <Item>
          <h3 className={classes.joinTitle}>加入奴才團隊</h3>
          <p className={classes.joinMain}>我也會畫畫，<br/>希望能盡一份心力！</p>
          <button className={classes.joinBtn}>聯絡我們</button>
      </Item>
    </Grid>
    <Grid item xs={12} md={2}>
      <Item><img src={Link02} alt="" /></Item>
    </Grid>
    <Grid item xs={12} md={3}>
      <Item>
          <h3 className={classes.joinTitle}>加入奴才團隊</h3>
          <p className={classes.joinMain}>我也會畫畫，<br/>希望能盡一份心力！</p>
          <button className={classes.joinBtn}>領養專區</button>
      </Item>
    </Grid>
  </Grid>
</Box>
  )};

export default ContactUs;
