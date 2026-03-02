import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import type { Pokemon } from "../types/Pokemon";
import axios from "axios";
import CardDetails from "../components/CardDetails";
import { Link } from "react-router-dom";

export default function PokemonDetail() {
	const { name } = useParams();

	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchPokemon() {
			try {
				const response = await api.get<Pokemon>(`/pokemon/${name}`);
				setPokemon(response.data);
			} catch (err) {
				if (axios.isAxiosError(err)) {
					setError(
						err.response?.data?.message ||
							err.message ||
							"Erro ao buscar Pokémon",
					);
				} else {
					setError("Erro inesperado");
				}
			} finally {
				setLoading(false);
			}
		}

		fetchPokemon();
	}, [name]);

	if (loading) return <p>Carregando...</p>;
	if (error) return <p>{error}</p>;
	if (!pokemon) return <p>Pokémon não encontrado</p>;

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Link to="/"> Voltar para Home</Link>
			<CardDetails pokemon={pokemon} />
		</div>
	);
}
