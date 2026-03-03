import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import type { Pokemon } from "../types/Pokemon";
import CardDetails from "../components/CardDetails";

export default function PokemonDetail() {
	const { name } = useParams();

	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchPokemon() {
			try {
				const response = await api.get<Pokemon>(`/pokemon/${name}`);
				setPokemon(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		}

		fetchPokemon();
	}, [name]);

	if (loading)
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p className="text-xl font-semibold animate-pulse">Carregando...</p>
			</div>
		);

	if (!pokemon)
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p>Pokémon não encontrado</p>
			</div>
		);

	return (
		<div className="min-h-screen bg-gray-100 pt-6 pl-6">
			<div className="mb-6">
				<Link to="/" className=" font-semibold hover:underline">
					← Voltar para Home
				</Link>
			</div>

			<div className="flex justify-center">
				<CardDetails pokemon={pokemon} />
			</div>
		</div>
	);
}
