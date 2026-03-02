import type { Pokemon } from "../types/Pokemon";

interface Props {
	pokemon: Pokemon;
}

export default function CardDetails({ pokemon }: Props) {
	return (
		<div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
			<img
				src={pokemon.sprites.other["official-artwork"].front_default}
				alt={pokemon.name}
				className="w-32 h-32 mx-auto"
			/>

			<h2 className="text-center text-xl font-bold capitalize mt-2">
				{pokemon.name}
			</h2>
			<hr />
			<p className="font-bold">
				Altura: <span className="font-normal">{pokemon.height}</span>
			</p>
			<p className="font-bold">
				Peso: <span className="font-normal">{pokemon.weight}</span>
			</p>
			<div className="flex gap-2 flex-wrap ">
				{pokemon.types.map((item) => {
					return (
						<span className="bg-purple-500 text-center rounded-full px-2  border-purple-800 border text-white">
							{item.type.name}
						</span>
					);
				})}
			</div>
		</div>
	);
}
