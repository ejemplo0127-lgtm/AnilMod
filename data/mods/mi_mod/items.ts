export const Items: import("../../../sim/dex-items").ItemDataTable = {
	// Pokemon Añil
	flappletunita: {
		name: "Flappletunita",
		spritenum: 576, // puedes usar cualquiera, es solo el ícono
		megaStone: "Flapple-Gmax", // o Appletun-Gmax, o tu nueva forma
		megaEvolves: "Flapple", // Pokémon que puede megaevolucionar con este ítem
		itemUser: ["Flapple"],
		onTakeItem: false,
		num: -2001, // número negativo para custom items
		gen: 9,
	},
	appletunita: {
		name: "Appletunita",
		spritenum: 576, // puedes usar cualquiera, es solo el ícono
		megaStone: "Appletun-Gmax", // o Appletun-Gmax, o tu nueva forma
		megaEvolves: "Appletun", // Pokémon que puede megaevolucionar con este ítem
		itemUser: ["Appletun"],
		onTakeItem: false,
		num: -2003, // número negativo para custom items
		gen: 9,
	},
	butterfreeita: {
		name: "Butterfreeita",
		spritenum: 577, // puedes usar cualquiera, es solo el ícono
		megaStone: "Butterfree-Gmax", // o Appletun-Gmax, o tu nueva forma
		megaEvolves: "Butterfree", // Pokémon que puede megaevolucionar con este ítem
		itemUser: ["Butterfree"],
		onTakeItem: false,
		num: -2002, // número negativo para custom items
		gen: 9,
	},
};
