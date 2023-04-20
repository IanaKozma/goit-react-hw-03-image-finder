import PropTypes from 'prop-types';
import { BiPlusMedical } from 'react-icons/bi';
import { LoadButton } from './Button.styled';

export const Button = ({ onNextFetch }) => {
  return (
    <LoadButton type="button" onClick={onNextFetch}>
      Load more <BiPlusMedical /* className={css.icon} */ />
    </LoadButton>
  );
}

Button.propTypes = {
  onNextFetch: PropTypes.func.isRequired,
};