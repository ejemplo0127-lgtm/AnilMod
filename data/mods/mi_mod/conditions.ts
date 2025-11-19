import type { ModdedConditionData, ModdedPokemonSet } from "./types";

export const Conditions: { [k: string]: ModdedConditionData } = {
	frz: {
		inherit: true,
		onStart(target, source, sourceEffect) {
			this.add("-status", target, "frz");
		},
		onBeforeMove() {},
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
		onModifySpA(atk) {
			return this.chainModify(0.5);
		},
	},
};
