import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`  
${reset}

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;

    ::selection{
      background-color: #9971ff;
    }

    a{
      text-decoration:none;
    }
    button{
      cursor: pointer;
    }
   
    
  }
  a{
    text-decoration: none;
    color:black;
  }
  ::selection{
    background-color : #7063FF;
  }

`;

export default GlobalStyle;
