import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    
  }
  html{
    font-size: 62.5%;
  }
 
  @keyframes moveStars {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
}
  body {
    background-image: url('/background-stars.svg');
    animation: moveStars 20s linear infinite;
    background-size: cover;
    background-color: #11112B;
    color: #fff;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: 'Antonio', sans-serif;
font-family: 'League Spartan', sans-serif;
&::-webkit-scrollbar {
    width: 1em;
}
&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #11112B;
}
 
&::-webkit-scrollbar-thumb {
  background-color: rgb(52, 52, 79);
  outline: 1px solid #11112B;
  border-radius: 50%;
}
  }
  

  `;
