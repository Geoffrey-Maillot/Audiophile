/*------------------------
     CUSTOM COMPONENTS
-------------------------*/
import styled from 'styled-components';

// ==> Props
interface Button {
primary?: boolean;
}

interface Textfield {
error?: boolean;
}

interface Typo {
color?: string;
}


/*------------------------
      TYPOGRAPHY
-------------------------*/

export const H1 = styled.h1<Typo>`
font-size: 3em;
font-weight: bold;
text-transform: uppercase;
// line-height: 3.625em;
letter-spacing: .125em;
color: ${props => props.color || "#000"};
`
export const H1Mobile = styled(H1)`
font-size: 1.8em;

`
export const H2 = styled.h2<Typo>`
font-size: 2.5em;
font-weight: bold;
text-transform: uppercase;
// line-height: 2.75em;
letter-spacing: .152em;
color: ${props => props.color || "#000"};
`
export const H3 = styled.h3<Typo>`
font-size: 2em;
font-weight: bold;
text-transform: uppercase;
// line-height: 2.25em;
letter-spacing: .07em;
color: ${props => props.color || "#000"};
`
export const H4 = styled.h4<Typo>`
font-size: 1.75em;
font-weight: bold;
text-transform: uppercase;
// line-height: 2.375em;
letter-spacing: .125em;
color: ${props => props.color || "#000"};
`
export const H5 = styled.h5<Typo>`
font-size: 1.5em;
font-weight: bold;
text-transform: uppercase;
// line-height: 2.06em;
letter-spacing: .107em;
color: ${props => props.color || "#000"};
`
export const H6 = styled.h6<Typo>`
font-size: 1.125em;
font-weight: bold;
text-transform: uppercase;
// line-height: 1.56em;
letter-spacing: .08em;
color: ${props => props.color || "#000"};
`
export const OverlineText = styled.p<Typo>`
font-size: .875em;
font-weight: 400;
text-transform: uppercase;
// line-height: 1.1875em;
letter-spacing: .625em;
color: ${props => props.color || "#000"};
`

export const SubText = styled.p<Typo>`
font-size: .8125em;
font-weight: bold;
text-transform: uppercase;
// line-height: 1.5625em;
letter-spacing: .058em;
color: ${props => props.color || "#000"};
`
export const Body = styled.p<Typo>`
font-size: .9375em;
font-weight: 500;
line-height: 1.5625em;
color: ${props => props.color || "#000"};
`

/*------------------------
          BUTTON
-------------------------*/

export const Button = styled.button<Button>`
width: 160px;
height: 48px;
border: ${props => props.primary ? "none" : "1px solid #000"};
background: ${props => props.primary ? "#D87D4A" : "transparent"};
color: ${props => props.primary ? "#fff" : "#000"};
transition: all .3s;
font-weight: bold;
font-size: .8125em;
letter-spacing: .0625em;
text-transform: uppercase;


  &:hover {
background: ${props => props.primary ? "#fbaf85" : "#000"};
color: #fff;
border: none;
}
`

export const ButtonShop = styled.button<Typo>`
border: none;
background: transparent;
color: ${props => props.color || "#000"};
transition: all .3s;
font-size: .8125em;
font-weight: bold;
letter-spacing: .0625em;
text-transform: uppercase;

  &:hover {
color: #D87D4A;

}
`

/*------------------------
          TextField
-------------------------*/

// input Textfield
export const Textfield = styled.input<Textfield>`

width: 100%;
height: 56px;
border: 1px solid;
border-color: ${props => props.error ? "#CD2C2C" : "#CFCFCF"};
border-radius: 8px;
padding-left: 24px;

color: #000;
font-weight: bold;
font-size: .875em;
caret-color: #D87D4A;

  :: placeholder {
color: #999;
font-weight: bold;
font-size: .875em;
}

  : focus {
border-color: ${props => props.error ? "CD2C2C" : "#D87D4A"};
}
`
//label Texfield
export const Label = styled.label`
font-size: .75em;
font-weight: bold;
line-height: 2.5em;
`

// div contain input radio + label
export const DivRadio = styled.div`
width: 100%;
height: 56px;
border: 1px solid #CFCFCF;
border-radius: 8px;
margin: 8px;
padding-left: 24px;

color: #000;
font-weight: bold;
font-size: .875em;

display: flex;
justify-content: start;
align-items: center;

:hover, :focus-within {
  border-color: #D87D4A;

}
`

//input type radio
export const Radio = styled.input`
width: 20px;
height: 20px;
margin: 0 16px 0 0;
`

/*------------------------
     Article Number
-------------------------*/

export const NumberArticle = styled.div`
width: 120px;
height: 48px;
padding: 15px;
background-color: #F1F1F1;
display: flex;
justify-content: space-between;
align-items: center;

font-weight: bold;

`

export const ArticleButton = styled.button`
color: #B5B5B5;
background-color: transparent;
border: none;
font-size: .875em;
font-weight: bold;

  :hover {
    color: #D87D4A;
}
`
