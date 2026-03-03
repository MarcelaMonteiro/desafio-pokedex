import { useEffect, useState } from "react";
import api from "../api/api";
import type { Pokemon, PokemonListResponse } from "../types/Pokemon";
import Card from "../components/Card";
import Filter from "../components/Filter";

export default function Home() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchPokemons() {
			try {
				const response =
					await api.get<PokemonListResponse>("/pokemon?limit=151");

				const pokemonList = await Promise.all(
					response.data.results.map(async (pokemon) => {
						const res = await api.get<Pokemon>(pokemon.url);
						return res.data;
					}),
				);

				setPokemons(pokemonList);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		}

		fetchPokemons();
	}, []);

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-100">
				<p className="text-xl font-semibold animate-pulse">
					Carregando Pokémons...
				</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-3xl font-bold mb-6 text-center">Pokédex - 151</h1>

			<Filter setPokemons={setPokemons} pokemons={pokemons} />

			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-9">
				{pokemons.map((pokemon) => (
					<Card key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</div>
	);
}
