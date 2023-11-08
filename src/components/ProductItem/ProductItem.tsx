import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { CatalogProduct } from '../../types/CatalogProduct';

import './ProductItem.scss';

type Props = {
  product: CatalogProduct;
  isSlider: boolean;
  isProductsList: boolean,
};

export const ProductItem: FC<Props> = ({
  product,
  isSlider,
  isProductsList,
}) => {
  const {
    itemId,
    fullPrice,
    name,
    category,
    image,
    price,
    screen,
    capacity,
    ram,
  } = product;

  return (
    <div className={classNames(
      'card',
      { slider__card: isSlider },
      { 'products-list__card': isProductsList },
    )}
    >
      <Link
        to={`/${category}/${itemId}`}
        className="card__link"
      >
        <div className="image-container">
          <img
            src={`./_new/${image}`}
            alt={name}
            className="card__image"
          />
        </div>
        <div className="card-name-container">
          <p className="card__name">
            {name}
          </p>
        </div>
        <div className="card__prices prices">
          <p className="prices__current-price">
            {`$${price}`}
          </p>

          <p className="prices__full-price">
            {`$${fullPrice}`}
          </p>
        </div>
        <div className="card__info product-info">
          <div className="product-info__items">
            <p className="product-info__item">Screen</p>
            <p className="product-info__item">Capacity</p>
            <p className="product-info__item">RAM</p>
          </div>
          <div className="product-info__values">
            <p className="product-info__value">{`${screen}`}</p>
            <p className="product-info__value">
              {capacity}
            </p>
            <p className="product-info__value">
              {ram}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
