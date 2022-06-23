import styled from "styled-components";

export const FormStyled = styled.form`
margin-top:18px;
display: flex;
justify-content: space-between;
margin-bottom:33px;

input {
width:560px;
height:56px;
border:1px solid #BDBDBD;
border-radius: 12px;
outline:none;
padding-left:12px;
@font-face {
    font-family:'Montserrat';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
}
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
}
button {
    width:109px;
    height: 60px;
    background: #2F80ED;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
    border-radius: 12px;
    outline: none;
    border:none; 
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color:#FFFFFF
}
`



