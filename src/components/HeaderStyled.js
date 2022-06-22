import styled from "styled-components";

export const HeaderStyled = styled.div`
display:flex;
flex-direction: column;
position:relative;
 h1 {
    @font-face {
        font-family: 'Raleway', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');
    }
    padding-bottom: 58px;
 }
 ul {
   display: flex;
   justify-content: space-between;
    width:608px;
    padding-left:50px;
    padding-right:50px;
    border-bottom: 1px solid #BDBDBD;
    padding-bottom: 32px;

    
 }
 ul li{
  text-decoration: none;
  list-style-type: none;
  max-width:89px;
 }
 
 

 
 
`


