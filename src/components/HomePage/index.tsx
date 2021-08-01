// Import React
import React, { useEffect } from 'react';

// Import Style
import './styles.scss';
import { H1, H2, H5, Button, Body } from 'src/styles/styledComponents';

// Import React Router
import { Link } from 'react-router-dom';

// Import Components
import HeaderHome from './HeaderHome';
import Categories from 'src/components/Categories';
import BestGear from 'src/components/BestGear';

// Import IMG
import speakerZx9 from 'src/assets/img/home/mobile/image-speaker-zx9.png';

// Import Librairie
import { useMediaQuery } from 'react-responsive';

const HomePage = () => {
  // Media Querries
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });

  // Scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // RETURN -->
  return (
    <div className="homepage">
      {/*HEADER */}
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
            <Link to="/product/zx9-speaker">
              <Button>see product</Button>
            </Link>
          </div>
        </div>
        {/*SPEAKER ZX7*/}
        <div className="speaker-zx7">
          <H5>zx7 speaker</H5>
          <Link to="/product/zx7-speaker">
            {' '}
            <Button>See Product</Button>
          </Link>
        </div>
        {/*SPEAKER EARPHONE*/}
        <div className="earphone">
          <div className="earphone_img" />
          <div className="earphone_content">
            <H5 className="content-text">YX1 earphones</H5>
            <Link to="/product/yx1-earphones">
              <Button>See Product</Button>
            </Link>
          </div>
        </div>
        {/*BEST AUDIO GEAR*/}
        <BestGear />
      </main>
    </div>
  );
};

export default HomePage;
