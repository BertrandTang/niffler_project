import { readJsonSync } from "https://deno.land/std@0.66.0/fs/mod.ts";


// On créer une interface pour les pokémons pour pouvoir typer le return de notre fonction
interface Pokemon {
    name: string;
    id: number;
    type: string;
    img: string;
}

function createPokemonObjectsFromJSON(jsonFilePath:string): Pokemon[] {
try {
    const data = readJsonSync(jsonFilePath); // readJsonSync() lit le fichier JSON
    if (!Array.isArray(data)) { // On vérifie que le JSON est bien un tableau parce que sinon TypeScript est en PLS
        console.error("Error: JSON data is not an array");
        return [];
    }

    const pokemonNames: string[] = data as string[]; // On fout "data" dans "pokemonNames" et on le type
    const pokemonObjects = pokemonNames.map((name, index) => { // On mappe le tableau pour créer un objet pour chaque pokémon

        return {
            name: name,
            id: index + 1,
            type: "", // You can set the type later
            img: `src/public/img/sprite/${index + 1}.gif`
        };
    });
// Je veux mettre le tout dans un objet pokemon avec les clés name, id, type et img A FAIRE
    return pokemonObjects;
} catch (error) {
    console.error("Error reading or parsing the JSON file:", error);
    return [];
}
}

function writePokemonObjectsToJSON(jsonFileURL: string, pokemonArray: Pokemon[]): void {
  try {
    const jsonString: string = JSON.stringify(pokemonArray, null, 2);
    Deno.writeTextFileSync(jsonFileURL, jsonString);
    console.log(`Pokémon objects written to ${jsonFileURL}`);
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
}

// Example usage:
const jsonFilePath = 'src/public/json/151_pokemon.json'; // Path to your JSON file
const pokemonArray = createPokemonObjectsFromJSON(jsonFilePath);
console.log(pokemonArray);
writePokemonObjectsToJSON('/Users/nowaki/Desktop/Sandbox/niffler_project/src/public/json/newly_writtenPoke.json', pokemonArray);