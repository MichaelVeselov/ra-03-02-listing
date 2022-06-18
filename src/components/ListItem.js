import PropTypes from 'prop-types';

function ListItem(props) {
  const { url, MainImage, title, currency_code, price, quantity, state } =
    props.item;

  if (state === 'removed') {
    return null;
  }

  let productTitle = title;
  if (title.length > 50) {
    productTitle = productTitle.slice(0, 50) + '...';
  }

  let priceView;
  switch (currency_code) {
    case 'USD':
      priceView = `$${price}`;
      break;

    case 'EUR':
      priceView = `€${price}`;
      break;

    default:
      priceView = `£${price}`;
      break;
  }

  let quantityClass = 'item-quantity ';
  if (quantity < 10) {
    quantityClass = quantityClass + 'level-low';
  } else if (quantity < 20) {
    quantityClass = quantityClass + 'level-medium';
  } else {
    quantityClass = quantityClass + 'level-high';
  }

  return (
    <div className='item'>
      <div className='item-image'>
        <a href={url}>
          <img src={MainImage.url_570xN} alt='product_image' />
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{productTitle}</p>
        <p className='item-price'>{priceView}</p>
        <p className={quantityClass}>{`${quantity} left`}</p>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  listing_id: PropTypes.number,
  url: PropTypes.string,
  MainImage: PropTypes.object,
  title: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
};

export default ListItem;
