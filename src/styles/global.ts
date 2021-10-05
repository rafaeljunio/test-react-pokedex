import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background: #E0D7EC;

    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

    .rec.rec-dot {
  background: #7E7394;


}
.rec.rec-dot_active {

  background: #535662;


}

.rec.rec-arrow.rec.rec-arrow-left{
    box-sizing: border-box;
-webkit-transition: all 0.3s ease;
transition: all 0.3s ease;
font-size: 16px;
background-color: #524153;
color: #FFF;

border-radius: 50%;
border: 2px solid #000;
padding: 0;
width: 40px;
height: 40px;
min-width: 40px;
line-height: 40px;
-webkit-align-self: center;
-ms-flex-item-align: center;
align-self: center;
cursor: pointer;
outline: none;
}

.rec.rec-arrow.rec.rec-arrow-right{
    box-sizing: border-box;
-webkit-transition: all 0.3s ease;
transition: all 0.3s ease;
font-size: 16px;
background-color: #524153;
color: #FFF;

border-radius: 50%;
border: 2px solid #000;
padding: 0;
width: 40px;
height: 40px;
min-width: 40px;
line-height: 40px;
-webkit-align-self: center;
-ms-flex-item-align: center;
align-self: center;
cursor: pointer;
outline: none;
}

.rec.rec-item-wrapper{
    height:300px;
}
`;
