export const Scripts: BattleScriptsData = {
	gen: 9,
	canMegaEvo(pokemon) {
        const item = pokemon.getItem();

        // Mega personalizada para Flapple con Flappletunita
        if (pokemon.baseSpecies.name === "Flapple" && item.id === "flappletunita") {
            return "Flapple-Mega"; // nombre de la forma que definiste en pokedex.ts
        }

        // Puedes agregar más megas custom aquí
        // if (pokemon.baseSpecies.name === "Appletun" && item.id === "appletunita") return "Appletun-Mega";

        return undefined; // si no cumple, no puede megaevolucionar
    },
};
