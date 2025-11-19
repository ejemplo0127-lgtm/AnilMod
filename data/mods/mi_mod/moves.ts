import type { ModdedMoveData, ModdedPokemonSet } from "./types";

export const Moves: { [k: string]: ModdedMoveData } = {
	twinbeam: {
		inherit: true,
		basePower: 50, // antes 40
		desc: "Golpea dos veces con poder psíquico concentrado. Cada golpe puede hacer crítico y activar efectos secundarios.",
		shortDesc: "Golpea 2 veces. 50 de potencia por golpe.",
	},
	uturn: {
		inherit: true,
		basePower: 70, // antes 60
		desc: "El usuario ataca y luego se retira, permitiendo que entre otro Pokémon.",
		shortDesc: "Permite cambiar de Pokémon tras atacar. 70 de potencia.",
	},
	flipturn: {
		inherit: true,
		basePower: 70, // antes 60
		desc: "El usuario ataca y luego se retira, permitiendo que entre otro Pokémon.",
		shortDesc: "Ataca y permite cambiar tras golpear. 70 de potencia.",
	},
	paraboliccharge: {
		inherit: true,
		basePower: 65, // antes era 60, subido +5
		desc: "Roba PS al objetivo igual al 50% del daño infligido. Afecta a todos los Pokémon adyacentes.",
		shortDesc: "Recupera el 50% del daño infligido a cada objetivo.",
	},

	rocksmash: {
		inherit: true,
		basePower: 50, // antes 40
		desc: "Puede bajar la Defensa del objetivo un 50%.",
		shortDesc: "50% de bajar la Defensa del objetivo.",
	},

	geargrind: {
		inherit: true,
		basePower: 55, // antes 50
		accuracy: 90, // antes 85
		desc: "Golpea dos veces. Cada golpe puede hacer crítico y activar efectos secundarios.",
		shortDesc: "Golpea 2 veces con 90% de precisión.",
	},

	escalofrio: {
		num: 1100,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Escalofrio",
		desc: "Golpea por la espalda al enemigo y lo congela",
		shortDesc: "Congela al enemigo",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: "frz",
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: { boost: { atk: 1 } },
		contestType: "Beautiful",
	},
	deslizamiento: {
		num: 1101,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Deslizamiento",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, dance: 1, metronome: 1 },
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
};
