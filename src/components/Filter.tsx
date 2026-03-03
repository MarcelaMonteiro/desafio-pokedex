import { useEffect, useState } from "react";
import type { Pokemon, PokemonListResponse } from "../types/Pokemon";
import api from "../api/api";
interface FilterProps {
	setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
	pokemons: Pokemon[];
}

export default function Filter({ setPokemons, pokemons }: FilterProps) {
	const [name, setName] = useState("");
	function resetFilter() {
		async function fetchPokemons() {
			setName("");
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
			}
		}

		fetchPokemons();
	}
	useEffect(() => {
		if (name === "") {
			resetFilter();
		}
	}, [name]);

	function filtrar() {
		if (!name.trim()) {
			setPokemons(pokemons);
			return;
		}

		const filtrados = pokemons.filter((item) =>
			item.name.toLowerCase().includes(name.toLowerCase()),
		);

		setPokemons(filtrados);
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			filtrar();
		}
	}

	return (
		<div className="flex gap-3">
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder="Digite o nome"
			/>
			<div>
				<div className="flex gap-3">
					<button onClick={filtrar}>Buscar</button>
					<button onClick={resetFilter}>Limpar</button>
				</div>
			</div>
		</div>
	);
}
