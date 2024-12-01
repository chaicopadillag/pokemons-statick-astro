import { type Component, type JSX } from 'solid-js';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

type Props = {
  children?: JSX.Element;
};

type Pokemon = {
  name: string;
  id: string;
};

const getFavorites = (): Pokemon[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export const FavoritesPokemos: Component<Props> = (props) => {
  const pokemons = getFavorites();

  return (
    <>
      {props.children}
      <section aria-label='Listado de Pokémons' class='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-5'>
        {pokemons.map((pokemon) => (
          <FavoriteCardPokemon pokemon={pokemon} />
        ))}
      </section>
    </>
  );
};
