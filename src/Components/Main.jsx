import { AppBar, Box, styled, Toolbar, Typography , Paper, Button } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"

const Container = styled(Box)((theme)=>({
    background:'#8AAAE5',
    width:'98vw',
    height:'100vh',
    position:"fixed"
}))
const Container2 = styled(Box)((theme)=>({
    background:'#fff',
    width:'37.9vw',
    height:'80vh',
    marginLeft:'60vh',
    marginTop:'10vh',
    position:'fixed'
}))
const Navbar = styled(AppBar)((theme)=>({
    background:'#6883BC',
    width:'38vw',
    marginRight:'63vh',
    marginTop:'11.1vh',
    
}))
const Nav = styled(Toolbar)((theme)=>({
 display:'flex',
 gap:'15vh',
 fontWeight:'bold'
}))
const Container3 = styled(Box)((theme)=>({
    marginLeft:'13vh',
    marginTop:'15vh',
   
}))
const Grid = styled(Box)((theme)=>({
 height:'15vh',
 width:'15vh',
 background:'#79A7D3',
 cursor:'pointer',
 color:"#fff",
 fontSize:'20px',

}))
const Text = styled(Typography)((theme)=>({
 textAlign:'center',
 fontSize:'10vh',
 color:'#234E70',
}))
const Container4 = styled(Box)((theme)=>({
display:'flex',
 gap:'2vh',
 marginTop:'2vh',
}))
const Restart = styled(Button)((theme)=>({
 marginTop:'5vh',
 marginLeft:'17vh',
 background:'#6883BC',
 color:'#fff',
 fontWeight:'bold',
 ":hover":{
    background:'#79A7D3',
    color:'#fff'
 }
}))

const Warning = styled(Typography)(({theme})=>({
  width:'250px',
  height:"48px",
  position:'absolute',
  right:0,
  top:"5%",
  background:'#6883BC',
  color:"#fff",
  fontSize:'1.1rem',
  fontFamily:"cursive",
  padding:"5px",
  borderRadius:"5px",
  marginRight:'20vh'
  
  }));




const Main = ()=>{

  const [value , setValue] = useState(Array(9).fill(''));
  const [cross , setCross] = useState('X');
  const [warning1 , setWarning1] = useState(false);
  const [warning2 , setWarning2] = useState(false);
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem("ticTacToeScore");
    return storedScore ? JSON.parse(storedScore) : { playerBlueScore: 0, playerRedScore: 0 };
  });

  useEffect(() => {
    localStorage.setItem("ticTacToeScore", JSON.stringify(score));
  }, [score]);


  const handleOnClick = (n)=>{
   
    let square = [...value];
    if(value[n] !==''){
      alert("Already Clicked");
      return
    }


    square[n]=cross;
    setValue(square);
    if(cross === 'X'){
        setCross('O');
    }else{
        setCross('X');
    }

  //  Logic for checking which player wins the game and update the scoreboard accordingly

    if(checkWin(square)){
      if(cross==='X'){
        setScore({...score , playerBlueScore: score.playerBlueScore + 1});
        setWarning1(true);
        setTimeout(() => {
          setWarning1(false);
        },2000);
      
      }else{
        setScore({...score , playerRedScore: score.playerRedScore + 1})
        setWarning2(true);
        setTimeout(() => {
          setWarning2(false);
        },2000);
       

      }
      // square.fill('');
      setValue(square);
    }

    if(checkDraw(square)){
      alert("Match Draw");
      // square.fill('');
      setValue(square);
    }
    

  }


//  conditions to win the game  conditions for win the 
    const checkWin=(value)=>{

      const conditions =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]
      
      let flag = false;
      conditions.forEach(element =>{
        if(value[element[0]] !=='' && value[element[1]] !== '' && value[element[2]] !==''){
          if(value[element[0]] ===  value[element[1]] && value[element[1]] === value[element[2]] ){
            flag=true;
          }
        }
      });
      return flag;
      
    }
    
    //  logic for when match is draw
    const checkDraw = (value)=>{
      let count = 0;
         
      value.forEach(element =>{
        if(element !==''){
          count++
        }
      })
      
      if(count>=9){
        return true;
      }else{
        return false
      }
    }

    const handleRestart = () => {
      setValue(Array(9).fill(''));
      setCross('X');
      setWarning1(false);
      setWarning2(false);
    }



    return(
        <Container>
         <Container2>
              <Navbar>
                <Nav>
               <Typography style={{fontSize:'20px' , fontWeight:'bold' , color:'#234E70'}}>Player Blue <Typography style={{marginLeft:'5vh' , fontSize:"20px" , color:'#fff' ,fontWeight:"bold"}}>{score.playerBlueScore}</Typography> </Typography>
               <Typography style={{fontSize:'20px'}} >Score</Typography>
               <Typography style={{fontSize:'20px' , fontWeight:'bold' , color:'#234E70'}}>Player Red <Typography style={{marginLeft:'5vh' , fontSize:"20px" , color:'#fff' ,fontWeight:"bold"}}>{score.playerRedScore}</Typography> </Typography>
                </Nav>
              </Navbar>
              <Container3>
                <Container4>
                <Grid onClick={()=>handleOnClick(0) } ><Text style={{ color: value[0] === 'X' ? '#234E70' : value[0] === 'O' ? '#FF0000' : '#fff',}}>{value[0]}</Text></Grid>
                <Grid onClick={()=>handleOnClick(1)} ><Text style={{ color: value[1] === 'X' ? '#234E70' : value[1] === 'O' ? '#FF0000' : '#fff',}}>{value[1]}</Text></Grid>
                <Grid onClick={()=>handleOnClick(2)} ><Text style={{ color: value[2] === 'X' ? '#234E70' : value[2] === 'O' ? '#FF0000' : '#fff',}}>{value[2]}</Text></Grid>
                </Container4>
                <Container4>
                <Grid onClick={()=>handleOnClick(3)} ><Text style={{ color: value[3] === 'X' ? '#234E70' : value[3] === 'O' ? '#FF0000' : '#fff',}}>{value[3]}</Text></Grid>
                <Grid onClick={()=>handleOnClick(4)} ><Text style={{ color: value[4] === 'X' ? '#234E70' : value[4] === 'O' ? '#FF0000' : '#fff',}}>{value[4]}</Text></Grid>
                <Grid onClick={()=>handleOnClick(5)} ><Text style={{ color: value[5] === 'X' ? '#234E70' : value[5] === 'O' ? '#FF0000' : '#fff',}}>{value[5]}</Text></Grid>
                </Container4>
                <Container4>
                <Grid onClick={()=>handleOnClick(6)} ><Text style={{ color: value[6] === 'X' ? '#234E70' : value[6] === 'O' ? '#FF0000' : '#fff',}}>{value[6]}</Text></Grid>
                <Grid onClick={()=>handleOnClick(7)} ><Text style={{ color: value[7] === 'X' ? '#234E70' : value[7] === 'O' ? '#FF0000' : '#fff',}}>{value[7]}</Text></Grid>
                <Grid onClick={()=>handleOnClick(8)} ><Text style={{ color: value[8] === 'X' ? '#234E70' : value[8] === 'O' ? '#FF0000' : '#fff',}}>{value[8]}</Text></Grid>
                </Container4>
                
                <Restart onClick={()=> handleRestart()}><Typography>Play Again</Typography></Restart>
              </Container3>
         </Container2>
         {
          warning1 && <Warning>Player Blue win the game</Warning> 
          
         }
         {
         warning2 && <Warning>Player Red win the game</Warning>
         }
        </Container>
    )
}

export default Main;