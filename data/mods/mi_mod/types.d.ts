/* eslint-disable @typescript-eslint/no-empty-object-type */
import type {
	AbilityData,
	MoveData,
	SpeciesData,
	ConditionData,
	FormatList,
	Pokemon,
} from "../../.sim-dist/types";

/** Tipos extendidos para tu mod */
export interface ModdedAbilityData extends AbilityData {}
export interface ModdedMoveData extends MoveData {}
export interface ModdedSpeciesData extends SpeciesData {}
export interface ModdedConditionData extends ConditionData {}
export interface ModdedItemData extends AbilityData {} // si necesitas items custom
export type ModdedPokemonSet = Pokemon;
export type ModdedFormatList = FormatList;
/* eslint-enable @typescript-eslint/no-empty-object-type */
