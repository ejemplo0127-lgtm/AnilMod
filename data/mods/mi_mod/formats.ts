import type { FormatList } from "../../../sim/dex-formats";

export const Formats: FormatList = [
	// Formatos genéricos...
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

		challengeShow: true, // <--- esto hace que sea visible en el lobby
		rated: false, // opcional: si quieres combates con ranking
		canCancelMoves: true,
	},
];
