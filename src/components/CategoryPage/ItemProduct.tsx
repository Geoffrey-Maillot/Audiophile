// Import React
import React, { useEffect, useState } from 'react';

// Import Style
import './styles.scss';
import {
  H4,
  H5,
  OverlineText,
  Body,
  Button,
} from 'src/styles/styledComponents';

// Import Librairie
import { useMediaQuery } from 'react-responsive';

// Props Typescript
interface Props {
  new: boolean;
  slug: string;
  description: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

// --> Component

const ItemProduct = ({
  new: novelty,
  slug,
  description,
  image: { mobile, tablet, desktop },
}: Props) => {
  const [image, setImage] = useState<any>();
  useEffect(() => {
    async function loadData() {
      const imageLoad = await import(`src/assets/img/${mobile}.jpg`);
      await console.log(imageLoad);
      setImage(imageLoad.default);
    }
    loadData();
  }, []);

  {
    /* Media querries rules*/
  }
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1124px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });

  // RETURN -->
  return (
    <div className="product">
      <div className="product_img">
        <img
          src={
            isMobile
              ? require(`src/assets/img/${mobile}.jpg`).default
              : isTablet
              ? require(`src/assets/img/${tablet}.jpg`).default
              : isDesktop
              ? require(`src/assets/img/${desktop}.jpg`).default
              : null
          }
          alt="Product Image"
        />
      </div>

      <div className="product_description">
        {novelty && (
          <OverlineText className="overline" color="#d87d4a">
            New Product
          </OverlineText>
        )}

        {isMobile && <H5 className="title">{slug}</H5>}
        {!isMobile && <H4 className="title">{slug}</H4>}
        <Body className="body" color="#8c8c8c">
          {description}
        </Body>
        <Button primary>See Product</Button>
      </div>
    </div>
  );
};

export default ItemProduct;
