import React from 'react';
import PropTypes from 'prop-types';

const Container =({width, children}) => (
  <div style={{maxWidth: width, margin:'0 auto'}}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.shape().isRequired,


  width: PropTypes.number,
};
Container.defaultProps = {
  width: 1170,
}
export default Container;
