import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Title02 from '../../images/title02.png';
import Dog01 from '../../images/dog01.png';
import Dog01hover from '../../images/dog01hover.jpg';
import Dog04 from '../../images/04.png';
import Dog04hover from '../../images/dog04hover.jpg';
import Dog08 from '../../images/08.png';
import Dog08hover from '../../images/dog03.png';


const dogData = [
    {id:'dog01',
    url:Dog01,
    urlHover:Dog01hover,
     title:'等家中-華仔',
     describe:'目前7個月大的華仔，是個愛笑的貪吃鬼，喜歡吃西瓜還有蓮霧，是一隻吃素的乖狗狗，會挑食不喜歡...',   
    },
    {id:'dog04',
    url:Dog04,
    urlHover:Dog04hover,
     title:'等家中-小呆',
     describe:'小呆有著圓圓的大眼睛，一歲的他來自台中，原本陪著一位老奶奶生活，上個月奶奶行動不便不能再陪...',   
    },
    {id:'dog08',
    url:Dog08,
    urlHover:Dog08hover,
     title:'等家中-Snow',
     describe:'看起來很兇但特別怕打雷的Snow，很喜歡吃冰，冰冰的水也喜歡，如果摸他的額頭會發出吹口哨的聲...',   
    },
]

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
    '&:hover':{backgroundColor:'#F9C745'},
  }));

const useStyles = makeStyles({
    dogMore:{
      textDecoration:'none',
      color:'black',
      borderRadius:'23px',
    },
  });


const Adoption = () => {

    const classes = useStyles();


  return (
    <Box sx={{ flexGrow: 1,width:'90vw',textAlign:'center',margin:'0 auto' }}>
        <Grid container spacing={1}>
            <Grid sx={{textAlign:'center',marginTop:'36px'}} item xs={12} md={12}>
                <img src={Title02} alt="" />
            </Grid>
            {dogData.map((item)=>(
                <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}} item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        sx={{objectFit:'cover',objectPosition:'center'}}
                        component="img"
                        height="200"
                        image={item.url}
                        alt="gDog01"
                        />
                       <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                       {item.title}
                       </Typography>
                       <Typography variant="body2" color="text.secondary">
                       {item.describe}
                       </Typography>
                       </CardContent>
                       </CardActionArea>
                       <CardActions>
                       <Button size="small" sx={{color:'black',fontFamily: "'Kalam', cursive"}}>
                       More
                       </Button>
                    </CardActions>
                </Card>
            </Grid>
            ))}
            <Grid sx={{margin:'0 auto',marginTop:'10px'}} item xs={8} md={4} >
                        <Item>
                            <a className={classes.dogMore} href="#">看更多浪浪</a></Item>
                    </Grid>
        </Grid>
    </Box>
)};

export default Adoption;
