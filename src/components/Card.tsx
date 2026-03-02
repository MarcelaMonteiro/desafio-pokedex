import { Link } from "react-router-dom";
import type { Pokemon } from "../types/Pokemon";

interface Props {
	pokemon: Pokemon;
}

export default function Card({ pokemon }: Props) {
	return (
		<Link to={`/pokemon/${pokemon.name}`}>
			<div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
				<img
					src={pokemon.sprites.other["official-artwork"].front_default}
					alt={pokemon.name}
					className="w-32 h-32 mx-auto"
				/>

				<h2 className="text-center text-xl font-bold capitalize mt-2">
					{pokemon.name}
				</h2>
			</div>
		</Link>
	);
}
