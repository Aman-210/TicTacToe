import {Box, Button, styled, Typography , } from '@mui/material'
import { Link } from 'react-router-dom'

const Container = styled(Box)((theme)=>({
    width:'98vw',
    height:'98vh',
    background: `url('https://wallpapercave.com/wp/wp8984775.png')`,
    backgroundSize:'cover'
//   backgroundImage:'https://wallpapercave.com/wp/wp8984775.png'
}))

const Buttons = styled(Button)((theme)=>({
backgroundColor:'#fff',
width:'15vh',
height:'5vh',
marginTop:'70vh',
marginLeft:'90vh',
fontWeight:'bold'


}))


const Home = ()=>{
    return(
        <Container src="https://wallpapercave.com/wp/wp8984775.png">
         <Buttons>
          <Link to='main' style={{textDecoration:'none'}}> <p>Let's Play</p></Link>
         </Buttons>
        </Container>
    )
}

export default Home;