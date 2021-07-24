// == Import npm
import React from 'react';

import {HiOutlineChevronRight} from 'react-icons/hi'
import {IconContext} from "react-icons"

// Import Styled-Component
import { H1, Textfield, Label, Radio, DivRadio, NumberArticle, ArticleButton } from 'src/styles/styledComponents'  

// == Import
import reactLogo from './react-logo.svg';
import './styles.scss';

interface Props {
  title: string;
};

const Title = ({title}: Props) => <H1>{title}</H1>


const TestButton = () => <div>
  <NumberArticle><ArticleButton>-</ArticleButton>0<ArticleButton>+</ArticleButton></NumberArticle>
</div>

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <Title title={"composant: App"}/>
    <TestButton/>
  </div>
);

// == Export
export default App;
