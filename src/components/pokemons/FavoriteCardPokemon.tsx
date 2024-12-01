import { createSignal, Show, type Component } from 'solid-js';

type Pokemon = {
  name: string;
  id: string;
};

export const FavoriteCardPokemon: Component<{ pokemon: Pokemon }> = (props) => {
  const [isVisible, setIsVisible] = createSignal(true);
  const { pokemon } = props;

  const deleteFavorite = (id: string) => {
    const favorites: Pokemon[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = favorites.filter((pokemon: Pokemon) => pokemon.id !== id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsVisible(false);
  };

  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <Show when={isVisible()}>
      <article class='bg-slate-700 shadow-md rounded-md p-4 flex flex-col items-center'>
        <a href={`/pokemons/${pokemon.name}`}>
          <img src={image} alt={pokemon.name} class='w-32 h-32 object-contain' />
        </a>
        <h2 class='text-center text-lg font-bold mt-2 capitalize'>{pokemon.name}</h2>
        <button class='bg-red-500 text-white px-2 py-1 rounded-md mt-2' onclick={() => deleteFavorite(pokemon.id)}>
          Delete
        </button>
      </article>
    </Show>
  );
};
