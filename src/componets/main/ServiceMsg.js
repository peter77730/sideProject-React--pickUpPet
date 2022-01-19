import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Home01 from '../../images/home01.png';
import '../../styles/ServiceMsg.css';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'left',
    color: theme.palette.text.secondary,
    marginTop:'24px',
    boxShadow:'none',
    lineHeight:'1',
  }));

const ServiceMsg = () => {
    return (
        <Grid container
              justifyContent="center"
              alignItems="center"
              rowSpacing={1} columnSpacing={1}
              sx={{flexDirection: { xs: 'row', md: 'row-reverse' },
                   textAlign:{ xs:'center',md:'left'},paddingX:'36px'}}
              >
            <Grid item xs={12} md={5}>
                <Item>
                    <h3>Service</h3>
                    <h2>您出錢 我出力 一起助浪浪</h2>
                    <p>我們是一群貓奴才狗奴才，</p><br />
                    <p>希望能透過自己小小的力量幫助流浪貓狗們，</p><br />
                    <p>可我們沒什麼錢錢，帶我們喜歡畫畫、喜愛貓狗，</p><br />
                    <p>於是想到個兩全其美的好法子！</p><br />
                    <p>如果您購買我們的寵物似顏繪服務，</p><br />
                    <p>我們將會把設計費100%全數捐給浪浪們！</p><br />
                    <p>您出錢，我出力，合作無間讓浪浪有飯吃，讚啦！</p><br />
                </Item>
            </Grid>
            <Grid item xs={12} md={5}>
                <Item><img className='home01Style' src={Home01} alt="" /></Item>
            </Grid>
        </Grid>
    )
}

export default ServiceMsg
