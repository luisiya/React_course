import React from 'react';
import PropTypes from 'prop-types';

import styles from './SaveSquadsState.css';

const SaveSquadsState = ({saveSquads, deleteSquad}) => (

  <div className="readySquad" style={{textAlign: 'center', display: 'flex', margin: '20px 0 0 0'}}>
    {saveSquads.length > 0 ?

      <div>

        {saveSquads.map(user => (
            <div key={user.id} style={{display: 'flex', margin: '0 0 20px 0 ', fontSize: '14px'}}>

              <ul style={{width: '142px'}}>
                <button className={styles.deleteSquad} onClick={() => deleteSquad(user.id)}>&#10006;</button>
                <h4 style={{ color:'grey'}}>stats:</h4>
                <li style={{listStyleType: 'none'}}>strength: {user.stats.str} </li>
                <li style={{listStyleType: 'none'}}>speed: {user.stats.spd} </li>
                <li style={{listStyleType: 'none'}}>intelligence: {user.stats.int}</li>

              </ul>
              <ul style={{margin: '34px 0 0 0'}}>
                <h4 style={{ color:'grey'}}>heroes:</h4>
                {user.heroes.map(hero =>
                  <li key={hero.id} style={{listStyleType: 'square'}}>{hero.name}</li>
                )}</ul>


            </div>
          )
        )
        }

      </div> : <span>No squads</span>}

  </div>
);

SaveSquadsState.propTypes = {


  saveSquads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

  deleteSquad: PropTypes.func.isRequired
};

export default SaveSquadsState;
