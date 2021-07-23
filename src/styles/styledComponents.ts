/*------------------------
     CUSTOM COMPONENTS
-------------------------*/

import styled from 'styled-components';
// Import variables 
// Ne fonctionne pas
//import colors from 'src/styles/_vars.scss';



/*------------------------
      TYPOGRAPHY
-------------------------*/

export const H1 = styled.h1`
font-size: 3.5em;
font-weight: bold;
text-transform: uppercase;
// line-height: 3.625em;
letter-spacing: .125em;
color: ${props => props.color || "#000"};
`
export const H2 = styled.h2`
font-size: 2.5em;
font-weight: bold;
text-transform: uppercase;
// line-height: 2.75em;
letter-spacing: .152em;
color: ${props => props.color || "#000"};
`
export const H3 = styled.h3`
font-size: 2em;
font-weight: bold;
text-transform: uppercase;
// line-height: 2.25em;
letter-spacing: .07em;
color: ${props => props.color || "#000"};
`
export const H4 = styled.h4`
font-size: 1.75em;
font-weight: bold;
text-transform: uppercase;
// line-height: 2.375em;
letter-spacing: .125em;
color: ${props => props.color || "#000"};
`
export const H5 = styled.h5`
font-size: 1.5em;
font-weight: bold;
text-transform: uppercase;
// line-height: 2.06em;
letter-spacing: .107em;
color: ${props => props.color || "#000"};
`
export const H6 = styled.h6`
font-size: 1.125em;
font-weight: bold;
text-transform: uppercase;
// line-height: 1.56em;
letter-spacing: .08em;
color: ${props => props.color || "#000"};
`
export const OverlineText = styled.p`
font-size: .875em;
font-weight: 400;
text-transform: uppercase;
// line-height: 1.1875em;
letter-spacing: .625em;
color: ${props => props.color || "#000"};
`

export const SubText = styled.p`
font-size: .8125em;
font-weight: bold;
text-transform: uppercase;
// line-height: 1.5625em;
letter-spacing: .058em;
color: ${props => props.color || "#000"};
`
export const Body = styled.p`
font-size: .9375em;
font-weight: 500;
text-transform: uppercase;
line-height: 1.5625em;
color: ${props => props.color || "#000"};
`

/*------------------------
          BUTTON
-------------------------*/

export const Button = styled.button`
width: 160px;
height: 48px;
border: ${props => props.primary ? "none" : "1px solid #000"};
background: ${props => props.primary ? "#D87D4A" : "#fff"};
color: ${props => props.primary ? "#fff" : "#000"};
transition: all .3s;
font-weight: bold;
font-size: .8125em;
letter-spacing: .0625em;


  &:hover {
background: ${props => props.primary ? "#fbaf85" : "#000"};
color: #fff;
border: none;
}
`

export const ButtonShop = styled.button`
border: none;
background: #fff;
color: #000;
transition: all .3s;
font-size: .8125em;
font-weight: bold;
letter-spacing: .0625em;

  &:hover {
color: #D87D4A;

}
`

/*------------------------
          TextField
-------------------------*/

export const Textfield = styled.input`

width: 50%;
height: 56px;
border: 1px solid #CFCFCF;
border-radius: 8px;
margin: 8px;
padding-left: 24px;

color: #000;
font-weight: bold;
font-size: .875em

:: placeholder {
color: #999;
font-weight: bold;
font-size: .875em
}


@media(max-width: 768px) {
 width: 100%;
}
`
