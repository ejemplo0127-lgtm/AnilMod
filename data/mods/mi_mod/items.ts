import type {
	ModdedAbilityData,
	ModdedMoveData,
	ModdedItemData,
	ModdedPokemonSet,
	ModdedSpeciesData,
	ModdedConditionData,
	ModdedFormatList,
} from "./types";

export const Items: { [k: string]: ModdedItemData } = {
	// Pokemon Añil
	flappletunita: {
		name: "Flappletunita",
		spritenum: 576, // puedes usar cualquiera, es solo el ícono
		megaStone: "Flapple-Gmax", // o Appletun-Gmax, o tu nueva forma
		megaEvolves: "Flapple", // Pokémon que puede megaevolucionar con este ítem
		itemUser: ["Flapple"],
		num: -2001, // número negativo para custom items
		gen: 9,
	},
	butterfreeita: {
		name: "Butterfreeita",
		spritenum: 577, // puedes usar cualquiera, es solo el ícono
		megaStone: "Butterfree-Gmax", // o Appletun-Gmax, o tu nueva forma
		megaEvolves: "Butterfree", // Pokémon que puede megaevolucionar con este ítem
		itemUser: ["Butterfree"],
		num: -2002, // número negativo para custom items
		gen: 9,
	},
};
