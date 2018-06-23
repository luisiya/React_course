import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button';
import Input from './shared/Input';
import styles from './AddNewValueOfHero.css';
import CreateSelectOptions from './CreateSelectOptions';

export default class AddNewValueOfHero extends Component {
  static propTypes = {
    addNewHero: PropTypes.func
  };
  static defaultProps ={
    addNewHero:() => {},

  };
  state = {
    name:"",
    strength: 0,
    intelligence: 0,
    speed: 0,
     };


  handleInputChange = ({ target }) => {
    switch (target.name){
      case 'name':
        this.setState({ [target.name]: target.value });
        break;
      default:
        this.setState({ [target.name]: Number(target.value) });
        break;
    }
  };


  handleSubmit=(event)=>{
    event.preventDefault();
    this.setState({
      name: "",
      strength:0,
      intelligence:0,
      speed:0
    });
    this.props.addNewHero(this.state);


  };

  render() {

    return (
      <form className={styles.form} onSubmit={this.handleSubmit} >
        <div>
        <Input value={this.state.name} name="name" placeholder="New hero..." onChange={this.handleInputChange}/>
        </div>
        <div>
          <CreateSelectOptions value={this.state.strength}  name ="strength" number={10} label="Strength" onChange={this.handleInputChange}/>
          <CreateSelectOptions value={this.state.intelligence}  name ="intelligence" number={10} label="Intelligence" onChange={this.handleInputChange} />
          <CreateSelectOptions value={this.state.speed}  name ="speed" number={10} label="Speed" onChange={this.handleInputChange}/>
        </div>
        <div className={styles.actions} style={{ margin: '20px 0 0 0' }}>
        <Button type="submit" text="Add hero"  />
      </div>
      </form>
    );
  }
}
