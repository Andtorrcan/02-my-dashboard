import { Metadata } from "next";

interface Props { params: { id: string} };

const getPokemon = async (id: string) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json());


  console.log(data)
  return data;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const { id } = await params;
  const result = await getPokemon(id);
  return {
    title: result.name,
    description: result.name,
  }
}


export default async function PokemonPage({
  params,
}: {
  params: Promise<Props>
}) {
  const pokemonParams = (await params);

  return (
    <div>
      <h1>{pokemonParams.params.id} </h1>
    </div>
  );
}