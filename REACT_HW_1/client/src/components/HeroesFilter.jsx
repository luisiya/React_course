import React from 'react';
import PropTypes from 'prop-types';
import Input from './shared/Input';
import styles from './HeroesFilter.css';

const HeroesFilter = ({ filter, onFilterChange }) => {

  const handleChange = e => {

    onFilterChange(e.target.value);
  };

    return (
      <form className={styles.form}>
        <Input
          name="name"
          value={filter}
          onChange={handleChange}
          placeholder="Filter by heroes..."
        />
      </form>
    );

}


HeroesFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,

};

export default HeroesFilter;
