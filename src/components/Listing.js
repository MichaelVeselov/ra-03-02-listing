import ListItem from './ListItem';
import nextId from 'react-id-generator';
import PropTypes from 'prop-types';

function Listing(props) {
  const { items } = props;

  const elements = items.map((item) => {
    return <ListItem key={nextId()} item={item} />;
  });

  return <div className='item-list'>{elements}</div>;
}

Listing.defaultProps = { items: [] };

Listing.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Listing;
