import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.css';
import IconButton from './shared/IconButton';


export default class Hero extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    deleteHero: PropTypes.func.isRequired,
    addToSquad: PropTypes.func,
    addIcon: PropTypes.string,
    strength:PropTypes.number.isRequired,
    intelligence:PropTypes.number.isRequired,
    speed:PropTypes.number.isRequired,
  };
  static defaultProps = {
    addIcon:"false",
    addToSquad:()=>{}
  };


  handleInfo = () => console.log(`
  name:  ${this.props.name}
  id: ${this.props.id}
  strength: ${this.props.strength}
  intelligence: ${this.props.intelligence}
  speed: ${this.props.speed}`);

  render(){

    const { name , addIcon, id} = this.props;

    return (

          <div className={styles.hero}>
            <p className={styles.text}>{name}</p>
            <div className={styles.actions}>
              <IconButton  onClick={() =>this.props.deleteHero(id)} text="&#10006;" about="Delete_Hero"/>
              <IconButton onClick={this.handleInfo} text="&#9937;" about="About_Hero"/>
              {addIcon === "true" ? (
                <span style={{color: 'white'}}>_</span>
                  )
              :
                <IconButton onClick={()=>this.props.addToSquad(id)} text="&#10004;" about="Abd_Hero_to_Squad"/>
              }

            </div>
          </div>
    )

  }
}
