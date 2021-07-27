// Import React
import React from 'react';

// Import Style
import './styles.scss';
import { H1, H2, H4, Button, Body } from 'src/styles/styledComponents';

// Import Components
import HeaderHome from './HeaderHome';
import Categories from 'src/components/Categories';
import speakerZx9 from 'src/assets/img/home/mobile/image-speaker-zx9.png';

// Import Librairie
import { useMediaQuery } from 'react-responsive';

const HomePage = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });

  return (
    <div className="homepage">
      <HeaderHome />
      <main className="container-large">
        <Categories />
        {/*SPEAKER ZX9*/}
        <div className="speaker-zx9">
          <div>
            <img
              className="speaker-zx9--img"
              src={speakerZx9}
              alt="speaker-zx9"
            />
          </div>
          <div>
            {!isDesktop && (
              <H2 color="#fff">
                zx9 <br /> speaker
              </H2>
            )}
            {isDesktop && (
              <H1 color="#fff">
                zx9 <br /> speaker
              </H1>
            )}
            <Body className="speaker-zx9--body" color="#fff">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Body>
            <Button>see product</Button>
          </div>
        </div>
        <div className="speaker-zx7">
          <H4>zx7 speaker</H4>
          <Button>See Product</Button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
