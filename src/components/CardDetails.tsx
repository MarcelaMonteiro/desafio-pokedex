import type { Pokemon } from "../types/Pokemon";

interface Props {
	pokemon: Pokemon;
}

export default function CardDetails({ pokemon }: Props) {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white rounded-3xl shadow-2xl p-10 w-[350px] hover:scale-105 transition-all duration-300">
				<img
					src={pokemon.sprites.other["official-artwork"].front_default}
					alt={pokemon.name}
					className="w-60 h-60 mx-auto"
				/>
				<h2 className="text-center text-3xl font-bold capitalize mt-4">
					{pokemon.name}
				</h2>{" "}
				<hr className="my-4" />
				<div className="space-y-2 text-lg">
					<p className="font-bold">
						Altura: <span className="font-normal">{pokemon.height}</span>
					</p>
					<p className="font-bold">
						Peso: <span className="font-normal">{pokemon.weight}</span>
					</p>
				</div>
				<div className="flex gap-2 flex-wrap justify-center mt-4">
					{pokemon.types.map((item) => (
						<span
							key={item.type.name}
							className="bg-purple-600 rounded-full px-4 py-1 text-white text-sm font-medium"
						>
							{item.type.name}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
