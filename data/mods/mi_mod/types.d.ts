// types.d.ts
import type {
	AbilityData,
	MoveData,
	ItemData,
	PokemonSet,
	SpeciesData,
	ConditionData,
	FormatList,
} from "../../.sim-dist/types";

export interface ModdedAbilityData extends AbilityData {}
export interface ModdedMoveData extends MoveData {}
export interface ModdedItemData extends ItemData {}
export interface ModdedPokemonSet extends PokemonSet {}
export interface ModdedSpeciesData extends SpeciesData {}
export interface ModdedConditionData extends ConditionData {}
export type ModdedFormatList = FormatList;
