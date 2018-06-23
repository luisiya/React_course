import React, { Children } from 'react';
import PropTypes from 'prop-types';

const newStyles = {
  container: {
    display:'flex',
  },
  column:{
    flexGrow:1,
    margin: '0',
  },
};

const Grid = ({children}) => {
  const columns = Children.map(children, child =>
    (<div style={newStyles.column} >{child}</div>
    ));
  return <div style={newStyles.container}>{columns}</div>
};

Grid.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,


};

export default Grid;
