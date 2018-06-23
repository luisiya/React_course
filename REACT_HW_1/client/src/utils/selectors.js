/* eslint-disable no-param-reassign */

export const getVisibleHeroes = (heroes, filter, squadIds) =>

 heroes.filter(hero => hero.name.toLowerCase().includes(filter) && !squadIds.includes(hero.id) : 0);


export const getSquadHeroes = (heroes, squadIds) =>

heroes.filter(hero => squadIds.includes(hero.id));

export const getSquadsStats = heroes =>
heroes.reduce((stats, hero) => {
    stats.str += Number(hero.strength);
    stats.int += Number(hero.intelligence);
    stats.spd += Number(hero.speed);

  return stats;
  },
    {
      str:0,
      int:0,
      spd:0,
    },
);



