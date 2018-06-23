import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import styles from './HeroesList.css';

const HeroesList = ({ heroes, ...props }) => (
  <ul className={styles.list}>
    {heroes.map(user => (
      <li key={user.id} className={styles.item}>
        <Hero  {...user} {...props} />
      </li>
    ))}
  </ul>
);

HeroesList.propTypes = {

  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};



export default HeroesList;
