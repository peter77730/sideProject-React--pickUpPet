import Title01 from '../../images/title01.png';
import { makeStyles } from '@material-ui/styles';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import dog07 from '../../images/dog07.png';
import dog06 from '../../images/dog06.png';
import dog05 from '../../images/dog05.png';
import Michael from '../../images/Michael.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../styles/RecentWorks.css'

const useStyles = makeStyles({
    borderRad:{
        width:'100%',
        height:'auto',
        borderRadius:'10px',
        objectFit:'cover',
        objectPosition:'center',
        '&:hover':{
            transform:'scale(1.2,1.2) translate(-0%, -0%)',
            transition: 'all 0.5s ease-out',
        },
    },
    marginCenter:{
        textAlign:'center',
        marginTop:'36px',
    },
    goodMore:{
      textDecoration:'none',
      color:'black',
    },
    paintMore:{
      textDecoration:'none',
      color:'black',
    },
  });


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius:'23px',
    cursor:'pointer',
    boxShadow:'none',
    border:'1px solid #3A3A3A',
    opacity: 1, 
    fontSize:"20px",
  }));


  const itemData = [
    {
      img: `${dog07}`,
      title: 'Debbie',
      number:1,
    },
    {
      img: `${dog06}`,
      title: 'Jack',
      number:2,
    },
    {
      img: `${dog05}`,
      title: 'Peter',
      number:3,
    },
    {
      img: `${Michael}`,
      title: 'Michael',
      number:4,
    },
  ];


const RecentWorks = () => {
    const [itemId,setItemId] = useState(null)

    const classes = useStyles();

    return (
        <>
            <div className={classes.marginCenter}>
                <img src={Title01} alt="Title01" />
            </div>
            <Box sx={{ flexGrow: 1,width:'90vw',margin:'0 auto',position:'relative' }}>
                <Grid container spacing={1}>
                    {itemData.map((item) =>(
                    <Grid item xs={6} md={3} id={item.number} key={item.title}>
                        <Item sx={{boxShadow:'none',border:'0'}}>
                            <img className={classes.borderRad} src={item.img} alt="" />
                        </Item>
                    </Grid>
                    ))}                
                </Grid>
                <Grid sx={{margin:'0 auto',marginTop:'10px'}} container spacing={1}>
                    <Grid item xs={2} md={2} >
                        <Item sx={{boxShadow:'none',display:'none'}}></Item>
                    </Grid>
                    <Grid item xs={8} md={4} >
                        <Item sx={{'&:hover':{backgroundColor:'#F9C745'}}}>
                            <a className={classes.goodMore} href="#">查看更多作品</a></Item>
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <Item className="paintMore" sx={{backgroundColor:'#F9C745', '&:hover':{backgroundColor:'white',border:'1px solid #3A3A3A'}}} >
                            <a className={classes.paintMore} href="#">客製毛孩似顏繪</a></Item>
                    </Grid>
                    <Grid item xs={2} md={2} >
                        <Item sx={{boxShadow:'none',display:'none'}}></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default RecentWorks
