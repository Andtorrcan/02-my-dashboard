import React from 'react';

import { PokemonCard } from './PokemonCard';
import { SimplePokemon } from '@/interfaces/pokemons/simple-pokemon';

interface Props {
   pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons}: Props) => {
   return (
      <div className='flex flex-wrap gap-10 items-center justify-center'>
         {
            pokemons.map(pokemon => (
               <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} />
            ))
         }
      </div>
   )
}
