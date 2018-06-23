import React from 'react';
import PropTypes from 'prop-types';


const CalculateHeroStats = ({heroes, squadIds}) => (

  <div className="TotalInfo">

    <p style={{textAlign: 'center'}}>

      strength :

      {squadIds.length > 0 ?
        heroes.filter(user => squadIds.includes(user.id)).reduce(
          (totals, p) => (Number(totals) + Number(p.strength)),
          0) : 0}
    </p>
    <p style={{textAlign: 'center'}}>
      intelligence : {
      squadIds.length > 0 ?
        heroes.filter(user => squadIds.includes(user.id)).reduce(
          (totals, p) => (Number(totals) + Number(p.intelligence) ),
          0) : 0}
    </p>
    <p style={{textAlign: 'center'}}>
      speed : {
      squadIds.length > 0 ?
        heroes.filter(user => squadIds.includes(user.id)).reduce(
          (totals, p) => (Number(totals) + Number(p.speed) ),
          0) : 0}
    </p>
  </div>
);

CalculateHeroStats.propTypes = {

  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  squadIds: PropTypes.arrayOf(
    PropTypes.number).isRequired,

};


export default CalculateHeroStats;
