import PropTypes from "prop-types";
import  Button  from './BtnToHome.styled';

const BtnToHome = ({ className = "", text, type, onClick }) => {
  return (
    <Button
      className={className} 
      type={type}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

BtnToHome.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default BtnToHome;