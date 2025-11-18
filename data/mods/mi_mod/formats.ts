import type { FormatList } from "../../.sim-dist/types";
import { PokemonSet } from "../../.sim-dist/types";

export const Formats: FormatList = [
	{
		section: "Custom Mods",
	},
	{
		name: "[Gen 9] Añil",
		mod: "mi_mod",
		desc: "Pokemon Añil",
		gameType: "singles",
		searchShow: true,
		debug: true,

		ruleset: [
			"Team Preview",
			"Sleep Clause Mod",
			"timerstarting = 120",
			"timeraddperturn = 5",
			"timergrace = 5",
			"speciesclause",
			"nicknameclause",
			"maxteamsize= 6",
			"Cancel Mod",
		],

		// Ejemplo de equipo usando PokemonSet
		team: [
			{
				name: "Pikachu",
				species: "Pikachu",
				item: "Light Ball",
				moves: ["Thunderbolt", "Volt Tackle", "Iron Tail", "Quick Attack"],
				ability: "Static",
				level: 50,
				evs: { hp: 252, atk: 4, spe: 252 },
				ivs: { spa: 0 },
				gender: "M",
			} as PokemonSet,
			{
				name: "Charizard",
				species: "Charizard",
				item: "Charizardite X",
				moves: ["Flare Blitz", "Dragon Claw", "Earthquake", "Roost"],
				ability: "Blaze",
				level: 50,
				evs: { atk: 252, spe: 252, hp: 4 },
				ivs: { spa: 0 },
				gender: "M",
			} as PokemonSet,
		],

		challengeShow: true,
		rated: false,
		canCancelMoves: true,
	},
];
