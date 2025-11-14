import { FormatList, PokemonSet } from '../../.sim-dist/types';

export const Formats: FormatList = [
    // Formatos genéricos...
    {
        section: "Custom Mods",
    },
    {
        name: "[Gen 9] Añil",
        mod: "mi_mod",
        desc: "Pokemon Añil",
        ruleset: ['Team Preview', 'Sleep Clause Mod'],
        banlist: [],
        onValidateSet(set: any) {
            return [];
        },
        challengeShow: true, // <--- esto hace que sea visible en el lobby
        rated: false,        // opcional: si quieres combates con ranking
        canCancelMoves: true,
    },
];
