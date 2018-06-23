import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import Loader from './shared/Loader';
import {getVisibleHeroes, getSquadHeroes, getSquadsStats} from '../utils/selectors';
import * as api from '../utils/api';
import HeroesList from './HeroesList';
import InlineMessage from './InlineMessage';
import HeroesFilter from './HeroesFilter';
import CalculateHeroStats from './CalculateHeroStats';
import Button from './shared/Button';
import AddNewValueOfHero from './AddNewValueOfHero';
import SaveSquadsState from './SaveSquadsState';
import Container from './Container';
import Grid from './Grid';

class App extends Component {

  state = {
    heroes: [],
    filter: "",
    isLoading: false,
    squadIds: [],
    saveSquads: [],
  };

  componentDidMount() {
     this.getIninalData();
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  };

  getIninalData = () => {
    this.setState({isLoading: true});
    const heroPropmise =  api.getUserFromData();
    const squadsPromise =  api.getDataFromSquads();
        Promise.all([heroPropmise,squadsPromise]).then(
      ([{ data: allHeroes }, { data: squads }]) => {
        this.setState({
          heroes: allHeroes,
          saveSquads: squads,
          isLoading: false,
        });
      }
    );
  };

  addNewHero = (hero) => {
    this.setState({isLoading: true});
    api.addNewHero(hero).then(({data, error}) => {
      if (error) {
        console.log(error);
        this.setState({isLoading: false});
        return;
      }
      this.setState(state => ({
        heroes: [...state.heroes, data],
        isLoading: false,
      }));
    });
  };

  addToSquad = (id) => {

    this.setState(state => ({
      squadIds: [...state.squadIds, id],
         }));
  };

  deleteHeroFromList = (id) => {
    this.setState({isLoading: true});
    api.deleteHero(id).then(({error}) => {
      if (error) {
        console.log(error);
        this.setState({isLoading: false});
        return;
      }
      this.setState(state => ({
        heroes: state.heroes.filter(hero => hero.id !== id),
        isLoading: false,
      }));
    });
  };

  deleteHeroFromSquad = (id) => {
    this.setState(state => ({
      squadIds: state.squadIds.filter(user => user !== id),
    }));
  };

  saveSquads = () => {
    const {heroes, squadIds} = this.state;
    const squad = {};
    const squadHeroes = getSquadHeroes(heroes, squadIds);
    squad.heroes = squadHeroes;
    squad.stats = getSquadsStats(squadHeroes);

    api.saveSquad(squad).then(({data, error}) => {
      if (error) {
        console.log(error);
        this.setState({isLoading: false});
        return;
      }

      this.setState(state => ({
        squadIds: [],
        heroes: state.heroes.filter(user => state.squadIds.indexOf(user.id) === -1),
        saveSquads: [...state.saveSquads, data],
        isLoading: false,
      }));
    });
  };

  deleteSquad = (id) => {
    this.setState({isLoading: true});
    api.deleteSquad(id).then(({error}) => {
      if (error) {
        console.log(error);
        this.setState({isLoading: false});
        return;
      }
      this.setState(state => ({
        saveSquads: state.saveSquads.filter(hero => hero.id !== id),
        isLoading: false,
      }));
    });
  };

  resetSquad = () => {
    this.setState({
      squadIds: [],
    });
  };

  render() {

    const {heroes, isLoading, filter, squadIds, saveSquads} = this.state;
    const visibleHeroes = getVisibleHeroes(heroes, filter,squadIds );
    const visibleSquad = getSquadHeroes(heroes, squadIds);

    return (
      <Container>
        <Grid>
          <div className="inputNewHero">
            <h2 style={{textAlign: 'center'}}>Create Hero</h2>
            <AddNewValueOfHero addNewHero={this.addNewHero}/>
          </div>

          <div className="listOfHeroes">
            <h2 style={{textAlign: 'center'}}>Heroes</h2>
            {isLoading && <Loader width={80} height={80}/>}
            <HeroesFilter onFilterChange={this.onFilterChange} filter={filter} />
            {heroes.length > 0 ? (
              <HeroesList
                heroes={visibleHeroes}
                deleteHero={this.deleteHeroFromList}
                addToSquad={this.addToSquad}
              />
            ) : (

              <InlineMessage text="You have zero heroes"/>
            )}
          </div>

          <div className="Squad_editor" style={{margin: '0 0 0 10px'}}>
            <h2 style={{textAlign: 'center'}}>Squad editor</h2>
            <Button type="submit" onClick={this.saveSquads} text="Save Squad"/>
            <Button type="submit" onClick={this.resetSquad} text="Reset"/>

            {isLoading && <Loader width={80} height={80}/>}
            {heroes.length > 0 ? (
              <div>
                <CalculateHeroStats heroes={heroes} squadIds={squadIds}/>
                <HeroesList addIcon="true"
                            heroes={visibleSquad}
                            deleteHero={this.deleteHeroFromSquad}
                />
              </div>

            ) : (
              <InlineMessage text="You have zero heroes"/>
            )}

          </div>

          <div className="Squad_stats">
            <h2 style={{textAlign: 'center'}}>Saved squad</h2>
            {isLoading && <Loader width={80} height={80}/>}
            <SaveSquadsState saveSquads={saveSquads}
                             deleteSquad={this.deleteSquad}
            />
          </div>
        </Grid>

      </Container>
    );
  }
}

export default hot(module)(App);
