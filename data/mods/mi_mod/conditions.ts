export const Conditions: import("../../../sim/dex-conditions").ConditionDataTable =
{
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
