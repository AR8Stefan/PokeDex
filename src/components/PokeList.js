import React, {
	Component
} from 'react';

import PokeCell from './PokeCell.js';
import {
	pokeClasses
} from '../pokeClasses.js'

import './styles/PokeList.css';

const PokeList = () => {
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell 
        key={pokeClass.id} 
        pokeClass={pokeClass} 
      />
    );
  });

  return (
    <section className="poke-list">

    </section>
  )
}

export default PokeList;