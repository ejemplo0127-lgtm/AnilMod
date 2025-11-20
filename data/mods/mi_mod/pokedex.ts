// export const Pokedex: { [speciesid: string]: ModdedSpeciesData } = {
export const Pokedex: import("../../../sim/dex-species").ModdedSpeciesDataTable =
	{
		goodrahisui: {
			inherit: true,
			baseStats: { hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80 },
		},
		caterpie: {
			inherit: true,
			baseStats: { hp: 45, atk: 40, def: 35, spa: 20, spd: 20, spe: 45 },
		},
		metapod: {
			inherit: true,
			baseStats: { hp: 50, atk: 60, def: 55, spa: 25, spd: 25, spe: 30 },
		},
		butterfree: {
			inherit: true,
			baseStats: { hp: 60, atk: 45, def: 50, spa: 100, spd: 100, spe: 90 },
		},
		butterfreegmax: {
			inherit: true,
			baseSpecies: "Butterfree",
			forme: "Gmax",
			baseStats: { hp: 60, atk: 55, def: 70, spa: 120, spd: 130, spe: 110 },
			isMega: true,
			requiredItem: "Butterfreeita",
			isNonstandard: null, // <-- MUY IMPORTANTE: permite usarla
		},
		weedle: {
			inherit: true,
			baseStats: { hp: 40, atk: 45, def: 30, spa: 20, spd: 20, spe: 50 },
		},
		kakuna: {
			inherit: true,
			baseStats: { hp: 45, atk: 65, def: 50, spa: 25, spd: 25, spe: 35 },
		},
		beedrill: {
			inherit: true,
			baseStats: { hp: 65, atk: 100, def: 40, spa: 65, spd: 80, spe: 95 },
		},
		pidgey: {
			inherit: true,
			baseStats: { hp: 40, atk: 50, def: 40, spa: 45, spd: 35, spe: 56 },
		},
		pidgeotto: {
			inherit: true,
			baseStats: { hp: 63, atk: 83, def: 55, spa: 75, spd: 50, spe: 81 },
		},
		pidgeot: {
			inherit: true,
			baseStats: { hp: 83, atk: 95, def: 75, spa: 105, spd: 70, spe: 100 },
		},
		raticate: {
			inherit: true,
			baseStats: { hp: 65, atk: 100, def: 60, spa: 50, spd: 70, spe: 110 },
		},
		fearow: {
			inherit: true,
			baseStats: { hp: 65, atk: 115, def: 65, spa: 61, spd: 61, spe: 100 },
		},
		arbok: {
			inherit: true,
			baseStats: { hp: 70, atk: 95, def: 69, spa: 65, spd: 79, spe: 95 },
			types: ["POISON", "DARK"],
		},
		pikachu: {
			inherit: true,
			baseStats: { hp: 35, atk: 55, def: 30, spa: 50, spd: 40, spe: 90 },
		},
		raichu: {
			inherit: true,
			baseStats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 100 },
		},
		raichualola: {
			inherit: true,
			baseStats: { hp: 60, atk: 90, def: 55, spa: 80, spd: 100, spe: 90 },
		},
		sandslash: {
			inherit: true,
			baseStats: { hp: 75, atk: 110, def: 110, spa: 45, spd: 55, spe: 70 },
		},
		nidoqueen: {
			inherit: true,
			baseStats: { hp: 90, atk: 82, def: 87, spa: 75, spd: 85, spe: 76 },
		},
		nidoking: {
			inherit: true,
			baseStats: { hp: 81, atk: 92, def: 77, spa: 85, spd: 75, spe: 85 },
		},
		vulpix: {
			inherit: true,
			baseStats: { hp: 38, atk: 41, def: 40, spa: 60, spd: 65, spe: 65 },
		},
		ninetales: {
			inherit: true,
			baseStats: { hp: 73, atk: 76, def: 75, spa: 100, spd: 100, spe: 100 },
		},
		wigglytuff: {
			inherit: true,
			baseStats: { hp: 140, atk: 65, def: 60, spa: 85, spd: 60, spe: 45 },
		},
		zubat: {
			inherit: true,
			baseStats: { hp: 40, atk: 55, def: 35, spa: 30, spd: 40, spe: 75 },
		},
		golbat: {
			inherit: true,
			baseStats: { hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 100 },
		},
		vileplume: {
			inherit: true,
			baseStats: { hp: 75, atk: 80, def: 85, spa: 110, spd: 95, spe: 50 },
		},
		paras: {
			inherit: true,
			baseStats: { hp: 65, atk: 70, def: 55, spa: 45, spd: 55, spe: 25 },
		},
		parasect: {
			inherit: true,
			baseStats: { hp: 95, atk: 100, def: 80, spa: 60, spd: 90, spe: 30 },
		},
		venonat: {
			inherit: true,
			baseStats: { hp: 60, atk: 55, def: 50, spa: 60, spd: 55, spe: 45 },
		},
		venomoth: {
			inherit: true,
			baseStats: { hp: 70, atk: 65, def: 60, spa: 100, spd: 90, spe: 90 },
		},
		diglett: {
			inherit: true,
			baseStats: { hp: 30, atk: 60, def: 35, spa: 35, spd: 45, spe: 95 },
		},
		dugtrio: {
			inherit: true,
			baseStats: { hp: 65, atk: 100, def: 70, spa: 50, spd: 70, spe: 120 },
		},
		meowth: {
			inherit: true,
			baseStats: { hp: 40, atk: 65, def: 35, spa: 40, spd: 40, spe: 90 },
		},
		persian: {
			inherit: true,
			baseStats: { hp: 75, atk: 105, def: 60, spa: 85, spd: 65, spe: 115 },
		},
		psyduck: {
			inherit: true,
			baseStats: { hp: 60, atk: 52, def: 48, spa: 65, spd: 50, spe: 55 },
		},
		golduck: {
			inherit: true,
			baseStats: { hp: 80, atk: 92, def: 78, spa: 95, spd: 80, spe: 85 },
			types: ["WATER", "PSYCHIC"],
		},
		primeape: {
			inherit: true,
			baseStats: { hp: 65, atk: 115, def: 60, spa: 60, spd: 70, spe: 105 },
		},
		poliwag: {
			inherit: true,
			baseStats: { hp: 55, atk: 60, def: 40, spa: 55, spd: 50, spe: 75 },
		},
		poliwhirl: {
			inherit: true,
			baseStats: { hp: 65, atk: 80, def: 65, spa: 65, spd: 55, spe: 80 },
		},
		victreebel: {
			inherit: true,
			baseStats: { hp: 80, atk: 110, def: 70, spa: 95, spd: 70, spe: 70 },
		},
		geodude: {
			inherit: true,
			baseStats: { hp: 50, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
		},
		graveler: {
			inherit: true,
			baseStats: { hp: 80, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 },
		},
		golem: {
			inherit: true,
			baseStats: { hp: 110, atk: 120, def: 130, spa: 55, spd: 65, spe: 45 },
		},
		rapidash: {
			inherit: true,
			baseStats: { hp: 85, atk: 110, def: 70, spa: 80, spd: 80, spe: 105 },
		},
		farfetchd: {
			inherit: true,
			baseStats: { hp: 85, atk: 100, def: 75, spa: 60, spd: 85, spe: 95 },
			types: ["FLYING", "NORMAL"],
		},
		dodrio: {
			inherit: true,
			baseStats: { hp: 70, atk: 110, def: 70, spa: 60, spd: 60, spe: 110 },
		},
		dewgong: {
			inherit: true,
			baseStats: { hp: 90, atk: 90, def: 80, spa: 90, spd: 95, spe: 70 },
		},
		shellder: {
			inherit: true,
			baseStats: { hp: 30, atk: 65, def: 100, spa: 50, spd: 25, spe: 50 },
		},
		onix: {
			inherit: true,
			baseStats: { hp: 55, atk: 60, def: 160, spa: 30, spd: 45, spe: 70 },
		},
		drowzee: {
			inherit: true,
			baseStats: { hp: 60, atk: 48, def: 45, spa: 63, spd: 90, spe: 42 },
		},
		hypno: {
			inherit: true,
			baseStats: { hp: 85, atk: 80, def: 70, spa: 95, spd: 115, spe: 67 },
		},
		krabby: {
			inherit: true,
			baseStats: { hp: 30, atk: 105, def: 90, spa: 40, spd: 35, spe: 50 },
		},
		kingler: {
			inherit: true,
			baseStats: { hp: 75, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
		},
		electrode: {
			inherit: true,
			baseStats: { hp: 60, atk: 50, def: 70, spa: 90, spd: 80, spe: 150 },
		},
		exeggutor: {
			inherit: true,
			baseStats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 80, spe: 55 },
		},
		cubone: {
			inherit: true,
			baseStats: { hp: 50, atk: 70, def: 95, spa: 40, spd: 50, spe: 55 },
		},
		marowak: {
			inherit: true,
			baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 65 },
		},
		hitmonlee: {
			inherit: true,
			baseStats: { hp: 60, atk: 120, def: 53, spa: 35, spd: 110, spe: 87 },
		},
		hitmonchan: {
			inherit: true,
			baseStats: { hp: 60, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 },
		},
		weezing: {
			inherit: true,
			baseStats: { hp: 65, atk: 90, def: 120, spa: 95, spd: 70, spe: 60 },
		},
		seaking: {
			inherit: true,
			baseStats: { hp: 80, atk: 110, def: 75, spa: 65, spd: 80, spe: 80 },
		},
		mrmime: {
			inherit: true,
			baseStats: { hp: 50, atk: 45, def: 65, spa: 100, spd: 120, spe: 90 },
		},
		mrmimegalar: {
			inherit: true,
			baseStats: { hp: 80, atk: 45, def: 85, spa: 110, spd: 120, spe: 90 },
		},
		jynx: {
			inherit: true,
			baseStats: { hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 105 },
			types: ["PSYCHIC", "ICE"],
		},
		tauros: {
			inherit: true,
			baseStats: { hp: 75, atk: 110, def: 95, spa: 40, spd: 70, spe: 110 },
		},
		eevee: {
			inherit: true,
			baseStats: { hp: 55, atk: 65, def: 50, spa: 45, spd: 65, spe: 55 },
		},
		mewtwo: {
			inherit: true,
			baseStats: { hp: 110, atk: 110, def: 100, spa: 154, spd: 130, spe: 130 },
		},
		meganium: {
			inherit: true,
			baseStats: { hp: 80, atk: 82, def: 100, spa: 90, spd: 100, spe: 80 },
			types: ["GRASS", "FAIRY"],
		},
		sentret: {
			inherit: true,
			baseStats: { hp: 35, atk: 66, def: 34, spa: 35, spd: 45, spe: 70 },
		},
		furret: {
			inherit: true,
			baseStats: { hp: 85, atk: 90, def: 64, spa: 45, spd: 65, spe: 110 },
		},
		hoothoot: {
			inherit: true,
			baseStats: { hp: 60, atk: 30, def: 30, spa: 66, spd: 56, spe: 50 },
		},
		noctowl: {
			inherit: true,
			baseStats: { hp: 100, atk: 50, def: 65, spa: 95, spd: 96, spe: 70 },
		},
		ledyba: {
			inherit: true,
			baseStats: { hp: 40, atk: 40, def: 30, spa: 60, spd: 80, spe: 55 },
		},
		ledian: {
			inherit: true,
			baseStats: { hp: 70, atk: 65, def: 50, spa: 85, spd: 110, spe: 85 },
		},
		spinarak: {
			inherit: true,
			baseStats: { hp: 40, atk: 60, def: 40, spa: 40, spd: 50, spe: 70 },
		},
		ariados: {
			inherit: true,
			baseStats: { hp: 85, atk: 110, def: 70, spa: 60, spd: 60, spe: 80 },
		},
		xatu: {
			inherit: true,
			baseStats: { hp: 65, atk: 75, def: 70, spa: 95, spd: 70, spe: 100 },
		},
		azumarill: {
			inherit: true,
			baseStats: { hp: 100, atk: 50, def: 80, spa: 50, spd: 80, spe: 50 },
		},
		sudowoodo: {
			inherit: true,
			baseStats: { hp: 80, atk: 100, def: 120, spa: 50, spd: 75, spe: 50 },
		},
		hoppip: {
			inherit: true,
			baseStats: { hp: 35, atk: 45, def: 40, spa: 35, spd: 55, spe: 50 },
		},
		skiploom: {
			inherit: true,
			baseStats: { hp: 55, atk: 65, def: 50, spa: 45, spd: 65, spe: 80 },
		},
		jumpluff: {
			inherit: true,
			baseStats: { hp: 75, atk: 90, def: 70, spa: 55, spd: 95, spe: 110 },
		},
		sunkern: {
			inherit: true,
			baseStats: { hp: 30, atk: 50, def: 30, spa: 50, spd: 30, spe: 30 },
		},
		sunflora: {
			inherit: true,
			baseStats: { hp: 75, atk: 75, def: 65, spa: 115, spd: 95, spe: 30 },
			types: ["GRASS", "FIRE"],
		},
		wooper: {
			inherit: true,
			baseStats: { hp: 55, atk: 55, def: 45, spa: 35, spd: 35, spe: 15 },
		},
		quagsire: {
			inherit: true,
			baseStats: { hp: 95, atk: 100, def: 95, spa: 65, spd: 65, spe: 35 },
		},
		unown: {
			inherit: true,
			baseStats: { hp: 80, atk: 72, def: 48, spa: 80, spd: 80, spe: 48 },
		},
		steelix: {
			inherit: true,
			baseStats: { hp: 75, atk: 100, def: 200, spa: 55, spd: 65, spe: 30 },
		},
		ursaring: {
			inherit: true,
			baseStats: { hp: 90, atk: 110, def: 65, spa: 75, spd: 65, spe: 55 },
		},
		slugma: {
			inherit: true,
			baseStats: { hp: 60, atk: 40, def: 60, spa: 70, spd: 40, spe: 20 },
		},
		magcargo: {
			inherit: true,
			baseStats: { hp: 70, atk: 50, def: 140, spa: 100, spd: 80, spe: 30 },
		},
		corsola: {
			inherit: true,
			baseStats: { hp: 85, atk: 85, def: 85, spa: 95, spd: 85, spe: 35 },
		},
		delibird: {
			inherit: true,
			baseStats: { hp: 65, atk: 75, def: 65, spa: 100, spd: 65, spe: 90 },
		},
		tyrogue: {
			inherit: true,
			baseStats: { hp: 55, atk: 60, def: 60, spa: 35, spd: 45, spe: 65 },
		},
		miltank: {
			inherit: true,
			baseStats: { hp: 95, atk: 90, def: 105, spa: 40, spd: 70, spe: 100 },
		},
		mightyena: {
			inherit: true,
			baseStats: { hp: 70, atk: 110, def: 70, spa: 60, spd: 60, spe: 90 },
		},
		linoone: {
			inherit: true,
			baseStats: { hp: 80, atk: 70, def: 61, spa: 50, spd: 61, spe: 100 },
			types: ["NORMAL", "DARK"],
		},
		beautifly: {
			inherit: true,
			baseStats: { hp: 70, atk: 70, def: 60, spa: 110, spd: 75, spe: 85 },
		},
		dustox: {
			inherit: true,
			baseStats: { hp: 70, atk: 50, def: 70, spa: 90, spd: 105, spe: 85 },
		},
		ludicolo: {
			inherit: true,
			baseStats: { hp: 80, atk: 80, def: 70, spa: 90, spd: 100, spe: 70 },
		},
		seedot: {
			inherit: true,
			baseStats: { hp: 50, atk: 55, def: 50, spa: 50, spd: 50, spe: 55 },
		},
		nuzleaf: {
			inherit: true,
			baseStats: { hp: 70, atk: 70, def: 50, spa: 60, spd: 50, spe: 90 },
		},
		shiftry: {
			inherit: true,
			baseStats: { hp: 90, atk: 110, def: 60, spa: 95, spd: 60, spe: 90 },
		},
		taillow: {
			inherit: true,
			baseStats: { hp: 40, atk: 65, def: 30, spa: 30, spd: 30, spe: 85 },
		},
		swellow: {
			inherit: true,
			baseStats: { hp: 75, atk: 105, def: 60, spa: 50, spd: 50, spe: 125 },
		},
		pelipper: {
			inherit: true,
			baseStats: { hp: 80, atk: 50, def: 100, spa: 95, spd: 70, spe: 65 },
		},
		kirlia: {
			inherit: true,
			baseStats: { hp: 55, atk: 35, def: 45, spa: 75, spd: 75, spe: 50 },
		},
		surskit: {
			inherit: true,
			baseStats: { hp: 55, atk: 30, def: 32, spa: 60, spd: 60, spe: 65 },
		},
		masquerain: {
			inherit: true,
			baseStats: { hp: 70, atk: 60, def: 62, spa: 100, spd: 90, spe: 80 },
			types: ["BUG", "WATER"],
		},
		whismur: {
			inherit: true,
			baseStats: { hp: 64, atk: 60, def: 36, spa: 51, spd: 36, spe: 28 },
		},
		loudred: {
			inherit: true,
			baseStats: { hp: 84, atk: 80, def: 43, spa: 80, spd: 43, spe: 48 },
		},
		exploud: {
			inherit: true,
			baseStats: { hp: 104, atk: 100, def: 63, spa: 100, spd: 63, spe: 68 },
		},
		skitty: {
			inherit: true,
			baseStats: { hp: 50, atk: 65, def: 45, spa: 35, spd: 35, spe: 60 },
			types: ["NORMAL", "FAIRY"],
		},
		delcatty: {
			inherit: true,
			types: ["Normal", "Fairy"],
			baseStats: { hp: 90, atk: 95, def: 75, spa: 90, spd: 65, spe: 100 },
			tier: "LC",
			isNonstandard: null,
		},
		sableye: {
			inherit: true,
			baseStats: { hp: 75, atk: 90, def: 90, spa: 90, spd: 80, spe: 50 },
		},
		mawile: {
			inherit: true,
			baseStats: { hp: 65, atk: 85, def: 85, spa: 55, spd: 55, spe: 50 },
		},
		plusle: {
			inherit: true,
			baseStats: { hp: 60, atk: 50, def: 40, spa: 105, spd: 75, spe: 95 },
		},
		minun: {
			inherit: true,
			baseStats: { hp: 60, atk: 40, def: 50, spa: 75, spd: 105, spe: 95 },
		},
		volbeat: {
			inherit: true,
			baseStats: { hp: 65, atk: 53, def: 55, spa: 100, spd: 75, spe: 105 },
			types: ["BUG", "ELECTRIC"],
		},
		illumise: {
			inherit: true,
			baseStats: { hp: 65, atk: 53, def: 55, spa: 95, spd: 100, spe: 85 },
			types: ["BUG", "FAIRY"],
		},
		roselia: {
			inherit: true,
			baseStats: { hp: 50, atk: 70, def: 45, spa: 100, spd: 80, spe: 65 },
		},
		gulpin: {
			inherit: true,
			baseStats: { hp: 70, atk: 43, def: 53, spa: 53, spd: 53, spe: 40 },
		},
		swalot: {
			inherit: true,
			baseStats: { hp: 100, atk: 73, def: 83, spa: 80, spd: 83, spe: 55 },
		},
		sharpedo: {
			inherit: true,
			baseStats: { hp: 70, atk: 120, def: 50, spa: 90, spd: 50, spe: 100 },
		},
		wailord: {
			inherit: true,
			baseStats: { hp: 170, atk: 80, def: 65, spa: 90, spd: 65, spe: 60 },
		},
		camerupt: {
			inherit: true,
			baseStats: { hp: 70, atk: 100, def: 80, spa: 105, spd: 85, spe: 40 },
		},
		torkoal: {
			inherit: true,
			baseStats: { hp: 70, atk: 85, def: 140, spa: 95, spd: 70, spe: 20 },
		},
		grumpig: {
			inherit: true,
			baseStats: { hp: 80, atk: 45, def: 75, spa: 100, spd: 110, spe: 80 },
		},
		spinda: {
			inherit: true,
			baseStats: { hp: 70, atk: 100, def: 60, spa: 100, spd: 60, spe: 60 },
		},
		flygon: {
			inherit: true,
			baseStats: { hp: 80, atk: 100, def: 80, spa: 100, spd: 80, spe: 110 },
		},
		cacturne: {
			inherit: true,
			baseStats: { hp: 85, atk: 115, def: 60, spa: 115, spd: 60, spe: 55 },
		},
		swablu: {
			inherit: true,
			baseStats: { hp: 45, atk: 60, def: 60, spa: 60, spd: 75, spe: 50 },
		},
		altaria: {
			inherit: true,
			baseStats: { hp: 75, atk: 90, def: 90, spa: 90, spd: 95, spe: 80 },
			types: ["FLYING", "DRAGON"],
		},
		zangoose: {
			inherit: true,
			baseStats: { hp: 83, atk: 115, def: 70, spa: 60, spd: 70, spe: 100 },
		},
		seviper: {
			inherit: true,
			baseStats: { hp: 83, atk: 110, def: 70, spa: 90, spd: 60, spe: 65 },
		},
		lunatone: {
			inherit: true,
			baseStats: { hp: 90, atk: 55, def: 70, spa: 115, spd: 90, spe: 70 },
		},
		solrock: {
			inherit: true,
			baseStats: { hp: 90, atk: 115, def: 90, spa: 55, spd: 70, spe: 70 },
		},
		barboach: {
			inherit: true,
			baseStats: { hp: 60, atk: 65, def: 43, spa: 65, spd: 41, spe: 60 },
		},
		whiscash: {
			inherit: true,
			baseStats: { hp: 110, atk: 95, def: 73, spa: 76, spd: 81, spe: 60 },
		},
		baltoy: {
			inherit: true,
			baseStats: { hp: 40, atk: 40, def: 55, spa: 60, spd: 70, spe: 55 },
		},
		claydol: {
			inherit: true,
			baseStats: { hp: 70, atk: 60, def: 105, spa: 90, spd: 120, spe: 75 },
		},
		feebas: {
			inherit: true,
			baseStats: { hp: 50, atk: 45, def: 35, spa: 60, spd: 55, spe: 70 },
		},
		castform: {
			inherit: true,
			baseStats: { hp: 90, atk: 70, def: 90, spa: 100, spd: 90, spe: 70 },
		},
		kecleon: {
			inherit: true,
			baseStats: { hp: 60, atk: 100, def: 70, spa: 60, spd: 120, spe: 40 },
		},
		duskull: {
			inherit: true,
			baseStats: { hp: 20, atk: 55, def: 90, spa: 30, spd: 90, spe: 25 },
		},
		tropius: {
			inherit: true,
			baseStats: { hp: 99, atk: 90, def: 93, spa: 90, spd: 87, spe: 51 },
		},
		glalie: {
			inherit: true,
			baseStats: { hp: 90, atk: 90, def: 80, spa: 90, spd: 80, spe: 80 },
			types: ["ICE", "DARK"],
		},
		walrein: {
			inherit: true,
			baseStats: { hp: 110, atk: 90, def: 90, spa: 95, spd: 90, spe: 65 },
		},
		relicanth: {
			inherit: true,
			baseStats: { hp: 100, atk: 100, def: 130, spa: 45, spd: 65, spe: 55 },
		},
		luvdisc: {
			inherit: true,
			baseStats: { hp: 63, atk: 30, def: 55, spa: 110, spd: 65, spe: 100 },
			types: ["WATER", "FAIRY"],
		},
		staraptor: {
			inherit: true,
			baseStats: { hp: 85, atk: 120, def: 70, spa: 50, spd: 50, spe: 100 },
		},
		bibarel: {
			inherit: true,
			baseStats: { hp: 90, atk: 85, def: 70, spa: 70, spd: 80, spe: 71 },
		},
		kricketot: {
			inherit: true,
			baseStats: { hp: 37, atk: 45, def: 41, spa: 45, spd: 41, spe: 25 },
		},
		kricketune: {
			inherit: true,
			baseStats: { hp: 77, atk: 105, def: 61, spa: 55, spd: 86, spe: 65 },
		},
		shinx: {
			inherit: true,
			baseStats: { hp: 45, atk: 65, def: 34, spa: 40, spd: 34, spe: 65 },
		},
		luxio: {
			inherit: true,
			baseStats: { hp: 60, atk: 85, def: 49, spa: 65, spd: 49, spe: 80 },
		},
		luxray: {
			inherit: true,
			baseStats: { hp: 80, atk: 120, def: 75, spa: 75, spd: 75, spe: 100 },
		},
		budew: {
			inherit: true,
			baseStats: { hp: 50, atk: 50, def: 35, spa: 55, spd: 60, spe: 55 },
		},
		rampardos: {
			inherit: true,
			baseStats: { hp: 97, atk: 165, def: 60, spa: 65, spd: 50, spe: 68 },
		},
		bastiodon: {
			inherit: true,
			baseStats: { hp: 70, atk: 52, def: 168, spa: 47, spd: 138, spe: 30 },
		},
		wormadam: {
			inherit: true,
			baseStats: { hp: 80, atk: 59, def: 95, spa: 95, spd: 105, spe: 36 },
		},
		mothim: {
			inherit: true,
			baseStats: { hp: 70, atk: 84, def: 60, spa: 105, spd: 70, spe: 86 },
		},
		pachirisu: {
			inherit: true,
			baseStats: { hp: 60, atk: 45, def: 70, spa: 90, spd: 90, spe: 115 },
		},
		floatzel: {
			inherit: true,
			baseStats: { hp: 85, atk: 110, def: 55, spa: 85, spd: 50, spe: 115 },
		},
		cherrim: {
			inherit: true,
			baseStats: { hp: 70, atk: 60, def: 70, spa: 100, spd: 88, spe: 100 },
		},
		lopunny: {
			inherit: true,
			baseStats: { hp: 65, atk: 106, def: 84, spa: 54, spd: 96, spe: 105 },
			types: ["NORMAL", "FIGHTING"],
		},
		purugly: {
			inherit: true,
			baseStats: { hp: 85, atk: 102, def: 64, spa: 64, spd: 59, spe: 112 },
		},
		chingling: {
			inherit: true,
			baseStats: { hp: 55, atk: 30, def: 50, spa: 65, spd: 60, spe: 45 },
		},
		skuntank: {
			inherit: true,
			baseStats: { hp: 103, atk: 103, def: 67, spa: 71, spd: 61, spe: 84 },
		},
		bonsly: {
			inherit: true,
			baseStats: { hp: 50, atk: 80, def: 95, spa: 10, spd: 45, spe: 50 },
		},
		mimejr: {
			inherit: true,
			baseStats: { hp: 60, atk: 25, def: 45, spa: 90, spd: 90, spe: 90 },
		},
		chatot: {
			inherit: true,
			baseStats: { hp: 76, atk: 90, def: 55, spa: 100, spd: 52, spe: 100 },
		},
		spiritomb: {
			inherit: true,
			baseStats: { hp: 60, atk: 92, def: 108, spa: 92, spd: 108, spe: 35 },
		},
		toxicroak: {
			inherit: true,
			baseStats: { hp: 83, atk: 106, def: 65, spa: 86, spd: 65, spe: 90 },
		},
		carnivine: {
			inherit: true,
			baseStats: { hp: 80, atk: 110, def: 72, spa: 90, spd: 72, spe: 46 },
		},
		finneon: {
			inherit: true,
			baseStats: { hp: 49, atk: 49, def: 56, spa: 69, spd: 61, spe: 66 },
		},
		lumineon: {
			inherit: true,
			baseStats: { hp: 79, atk: 69, def: 76, spa: 100, spd: 86, spe: 91 },
		},
		abomasnow: {
			inherit: true,
			baseStats: { hp: 90, atk: 92, def: 85, spa: 92, spd: 95, spe: 60 },
		},
		froslass: {
			inherit: true,
			baseStats: { hp: 70, atk: 80, def: 70, spa: 90, spd: 70, spe: 110 },
		},
		cresselia: {
			inherit: true,
			baseStats: { hp: 120, atk: 70, def: 120, spa: 75, spd: 130, spe: 85 },
		},
		snivy: {
			inherit: true,
			baseStats: { hp: 45, atk: 50, def: 55, spa: 50, spd: 55, spe: 63 },
		},
		servine: {
			inherit: true,
			baseStats: { hp: 60, atk: 70, def: 75, spa: 70, spd: 75, spe: 83 },
		},
		serperior: {
			inherit: true,
			baseStats: { hp: 75, atk: 85, def: 95, spa: 85, spd: 95, spe: 113 },
			types: ["GRASS", "PSYCHIC"],
		},
		watchog: {
			inherit: true,
			baseStats: { hp: 70, atk: 95, def: 69, spa: 60, spd: 69, spe: 110 },
		},
		liepard: {
			inherit: true,
			baseStats: { hp: 70, atk: 110, def: 60, spa: 88, spd: 60, spe: 120 },
		},
		pansage: {
			inherit: true,
			baseStats: { hp: 50, atk: 60, def: 48, spa: 53, spd: 48, spe: 64 },
		},
		pansear: {
			inherit: true,
			baseStats: { hp: 50, atk: 53, def: 48, spa: 60, spd: 48, spe: 64 },
		},
		panpour: {
			inherit: true,
			baseStats: { hp: 50, atk: 53, def: 48, spa: 60, spd: 48, spe: 64 },
		},
		zebstrika: {
			inherit: true,
			baseStats: { hp: 85, atk: 110, def: 63, spa: 80, spd: 63, spe: 116 },
		},
		boldore: {
			inherit: true,
			baseStats: { hp: 80, atk: 105, def: 105, spa: 50, spd: 60, spe: 20 },
		},
		gigalith: {
			inherit: true,
			baseStats: { hp: 95, atk: 135, def: 130, spa: 60, spd: 80, spe: 25 },
		},
		woobat: {
			inherit: true,
			baseStats: { hp: 55, atk: 45, def: 43, spa: 55, spd: 43, spe: 72 },
		},
		swoobat: {
			inherit: true,
			baseStats: { hp: 67, atk: 67, def: 55, spa: 100, spd: 65, spe: 114 },
		},
		audino: {
			inherit: true,
			baseStats: { hp: 80, atk: 60, def: 86, spa: 90, spd: 86, spe: 50 },
		},
		timburr: {
			inherit: true,
			baseStats: { hp: 75, atk: 80, def: 55, spa: 35, spd: 35, spe: 35 },
		},
		gurdurr: {
			inherit: true,
			baseStats: { hp: 85, atk: 105, def: 85, spa: 50, spd: 50, spe: 40 },
		},
		seismitoad: {
			inherit: true,
			baseStats: { hp: 105, atk: 95, def: 75, spa: 90, spd: 75, spe: 74 },
		},
		leavanny: {
			inherit: true,
			baseStats: { hp: 75, atk: 110, def: 80, spa: 70, spd: 70, spe: 92 },
		},
		whimsicott: {
			inherit: true,
			baseStats: { hp: 60, atk: 67, def: 85, spa: 97, spd: 75, spe: 116 },
		},
		maractus: {
			inherit: true,
			baseStats: { hp: 75, atk: 86, def: 77, spa: 106, spd: 77, spe: 60 },
		},
		crustle: {
			inherit: true,
			baseStats: { hp: 70, atk: 105, def: 135, spa: 65, spd: 75, spe: 45 },
		},
		trubbish: {
			inherit: true,
			baseStats: { hp: 65, atk: 50, def: 62, spa: 50, spd: 62, spe: 65 },
		},
		garbodor: {
			inherit: true,
			baseStats: { hp: 100, atk: 95, def: 82, spa: 85, spd: 82, spe: 55 },
			types: ["POISON", "STEEL"],
		},
		ducklett: {
			inherit: true,
			baseStats: { hp: 62, atk: 44, def: 50, spa: 64, spd: 50, spe: 55 },
		},
		swanna: {
			inherit: true,
			baseStats: { hp: 75, atk: 87, def: 63, spa: 107, spd: 63, spe: 98 },
		},
		sawsbuck: {
			inherit: true,
			baseStats: { hp: 80, atk: 115, def: 70, spa: 60, spd: 70, spe: 105 },
		},
		emolga: {
			inherit: true,
			baseStats: { hp: 55, atk: 95, def: 60, spa: 95, spd: 60, spe: 110 },
		},
		alomomola: {
			inherit: true,
			baseStats: { hp: 165, atk: 75, def: 80, spa: 75, spd: 45, spe: 65 },
		},
		beheeyem: {
			inherit: true,
			baseStats: { hp: 75, atk: 75, def: 85, spa: 125, spd: 95, spe: 40 },
		},
		litwick: {
			inherit: true,
			baseStats: { hp: 50, atk: 50, def: 55, spa: 65, spd: 65, spe: 20 },
		},
		lampent: {
			inherit: true,
			baseStats: { hp: 60, atk: 55, def: 65, spa: 95, spd: 65, spe: 55 },
		},
		heatmor: {
			inherit: true,
			baseStats: { hp: 85, atk: 110, def: 86, spa: 95, spd: 86, spe: 65 },
		},
		larvesta: {
			inherit: true,
			baseStats: { hp: 75, atk: 85, def: 55, spa: 85, spd: 55, spe: 70 },
		},
		quilladin: {
			inherit: true,
			baseStats: { hp: 71, atk: 78, def: 95, spa: 56, spd: 58, spe: 57 },
		},
		chesnaught: {
			inherit: true,
			baseStats: { hp: 100, atk: 117, def: 122, spa: 64, spd: 75, spe: 64 },
		},
		bunnelby: {
			inherit: true,
			baseStats: { hp: 38, atk: 35, def: 38, spa: 32, spd: 36, spe: 57 },
		},
		talonflame: {
			inherit: true,
			baseStats: { hp: 78, atk: 90, def: 71, spa: 74, spd: 69, spe: 126 },
		},
		vivillon: {
			inherit: true,
			baseStats: { hp: 80, atk: 52, def: 50, spa: 105, spd: 90, spe: 89 },
		},
		pyroar: {
			inherit: true,
			baseStats: { hp: 86, atk: 68, def: 72, spa: 115, spd: 66, spe: 106 },
		},
		malamar: {
			inherit: true,
			baseStats: { hp: 86, atk: 100, def: 88, spa: 68, spd: 85, spe: 73 },
		},
		barbaracle: {
			inherit: true,
			baseStats: { hp: 72, atk: 115, def: 115, spa: 86, spd: 68, spe: 54 },
		},
		heliolisk: {
			inherit: true,
			baseStats: { hp: 62, atk: 55, def: 52, spa: 115, spd: 94, spe: 109 },
		},
		dedenne: {
			inherit: true,
			baseStats: { hp: 67, atk: 58, def: 57, spa: 100, spd: 85, spe: 101 },
		},
		trevenant: {
			inherit: true,
			baseStats: { hp: 85, atk: 110, def: 86, spa: 65, spd: 82, spe: 56 },
		},
		noibat: {
			inherit: true,
			baseStats: { hp: 60, atk: 65, def: 55, spa: 65, spd: 50, spe: 80 },
		},
		volcanion: {
			inherit: true,
			baseStats: { hp: 100, atk: 70, def: 120, spa: 130, spd: 130, spe: 80 },
		},
		gumshoos: {
			inherit: true,
			baseStats: { hp: 88, atk: 110, def: 60, spa: 55, spd: 60, spe: 85 },
		},
		ribombee: {
			inherit: true,
			baseStats: { hp: 60, atk: 55, def: 60, spa: 95, spd: 75, spe: 124 },
		},
		wishiwashi: {
			inherit: true,
			baseStats: { hp: 95, atk: 90, def: 80, spa: 85, spd: 85, spe: 40 },
		},
		morelull: {
			inherit: true,
			baseStats: { hp: 55, atk: 35, def: 55, spa: 65, spd: 75, spe: 15 },
		},
		shiinotic: {
			inherit: true,
			baseStats: { hp: 75, atk: 55, def: 80, spa: 90, spd: 100, spe: 30 },
		},
		steenee: {
			inherit: true,
			baseStats: { hp: 52, atk: 60, def: 48, spa: 60, spd: 48, spe: 62 },
		},
		golisopod: {
			inherit: true,
			baseStats: { hp: 75, atk: 125, def: 110, spa: 60, spd: 90, spe: 40 },
		},
		komala: {
			inherit: true,
			baseStats: { hp: 75, atk: 115, def: 65, spa: 75, spd: 95, spe: 65 },
		},
		mimikyu: {
			inherit: true,
			baseStats: { hp: 55, atk: 105, def: 80, spa: 50, spd: 105, spe: 96 },
		},
		bruxish: {
			inherit: true,
			baseStats: { hp: 68, atk: 110, def: 70, spa: 70, spd: 70, spe: 100 },
		},
		drampa: {
			inherit: true,
			baseStats: { hp: 85, atk: 60, def: 85, spa: 135, spd: 91, spe: 36 },
		},
		cosmoem: {
			inherit: true,
			baseStats: { hp: 43, atk: 29, def: 131, spa: 131, spd: 37, spe: 37 },
		},
		nihilego: {
			inherit: true,
			baseStats: { hp: 99, atk: 53, def: 47, spa: 117, spd: 111, spe: 93 },
		},
		buzzwole: {
			inherit: true,
			baseStats: { hp: 97, atk: 129, def: 119, spa: 53, spd: 53, spe: 89 },
		},
		pheromosa: {
			inherit: true,
			baseStats: { hp: 71, atk: 127, def: 37, spa: 117, spd: 37, spe: 131 },
		},
		xurkitree: {
			inherit: true,
			baseStats: { hp: 73, atk: 89, def: 61, spa: 143, spd: 71, spe: 83 },
		},
		celesteela: {
			inherit: true,
			baseStats: { hp: 87, atk: 91, def: 93, spa: 97, spd: 91, spe: 61 },
		},
		kartana: {
			inherit: true,
			baseStats: { hp: 59, atk: 151, def: 111, spa: 59, spd: 31, spe: 109 },
		},
		guzzlord: {
			inherit: true,
			baseStats: { hp: 173, atk: 101, def: 53, spa: 97, spd: 53, spe: 43 },
		},
		naganadel: {
			inherit: true,
			baseStats: { hp: 73, atk: 73, def: 73, spa: 117, spd: 73, spe: 121 },
		},
		stakataka: {
			inherit: true,
			baseStats: { hp: 61, atk: 121, def: 181, spa: 53, spd: 91, spe: 13 },
		},
		blacephalon: {
			inherit: true,
			baseStats: { hp: 53, atk: 97, def: 53, spa: 141, spd: 69, spe: 107 },
		},
		thwackey: {
			inherit: true,
			baseStats: { hp: 70, atk: 95, def: 70, spa: 55, spd: 60, spe: 80 },
		},
		rillaboom: {
			inherit: true,
			baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 86 },
		},
		drizzile: {
			inherit: true,
			baseStats: { hp: 65, atk: 50, def: 55, spa: 95, spd: 50, spe: 90 },
			types: ["WATER", "DARK"],
		},
		nickit: {
			inherit: true,
			baseStats: { hp: 40, atk: 28, def: 28, spa: 48, spd: 52, spe: 50 },
		},
		eldegoss: {
			inherit: true,
			baseStats: { hp: 60, atk: 50, def: 90, spa: 90, spd: 120, spe: 60 },
		},
		tox: {
			inherit: true,
			baseStats: { hp: 40, atk: 38, def: 35, spa: 35, spd: 40, spe: 40 },
		},
		sinistea: {
			inherit: true,
			baseStats: { hp: 40, atk: 45, def: 45, spa: 74, spd: 50, spe: 50 },
		},
		impidimp: {
			inherit: true,
			baseStats: { hp: 45, atk: 45, def: 30, spa: 40, spd: 50, spe: 50 },
		},
		morgrem: {
			inherit: true,
			baseStats: { hp: 65, atk: 60, def: 45, spa: 55, spd: 70, spe: 70 },
		},
		obstagoon: {
			inherit: true,
			baseStats: { hp: 93, atk: 95, def: 101, spa: 60, spd: 81, spe: 95 },
		},
		dracozolt: {
			inherit: true,
			baseStats: { hp: 90, atk: 115, def: 90, spa: 80, spd: 70, spe: 75 },
		},
		arctozolt: {
			inherit: true,
			baseStats: { hp: 90, atk: 115, def: 90, spa: 90, spd: 80, spe: 55 },
		},
		dracovish: {
			inherit: true,
			baseStats: { hp: 90, atk: 110, def: 100, spa: 70, spd: 80, spe: 75 },
		},
		arctovish: {
			inherit: true,
			baseStats: { hp: 90, atk: 115, def: 90, spa: 90, spd: 80, spe: 55 },
		},
		zacian: {
			inherit: true,
			baseStats: { hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138 },
			types: ["FAIRY", "STEEL"],
		},
		zamazenta: {
			inherit: true,
			baseStats: { hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138 },
			types: ["FIGHTING", "STEEL"],
		},
		spidops: {
			inherit: true,
			baseStats: { hp: 70, atk: 100, def: 92, spa: 52, spd: 86, spe: 35 },
		},
		lokix: {
			inherit: true,
			baseStats: { hp: 71, atk: 112, def: 78, spa: 52, spd: 55, spe: 92 },
		},
		maushold: {
			inherit: true,
			baseStats: { hp: 74, atk: 85, def: 70, spa: 65, spd: 75, spe: 111 },
		},
		squawkabilly: {
			inherit: true,
			baseStats: { hp: 82, atk: 106, def: 51, spa: 45, spd: 61, spe: 102 },
		},
		grafaiai: {
			inherit: true,
			baseStats: { hp: 63, atk: 105, def: 65, spa: 80, spd: 72, spe: 110 },
		},
		brambleghast: {
			inherit: true,
			baseStats: { hp: 55, atk: 115, def: 80, spa: 80, spd: 70, spe: 100 },
		},
		klawf: {
			inherit: true,
			baseStats: { hp: 80, atk: 100, def: 115, spa: 35, spd: 55, spe: 75 },
		},
		scovillain: {
			inherit: true,
			baseStats: { hp: 65, atk: 108, def: 65, spa: 108, spd: 65, spe: 95 },
		},
		rellor: {
			inherit: true,
			baseStats: { hp: 51, atk: 50, def: 60, spa: 31, spd: 58, spe: 40 },
		},
		espathra: {
			inherit: true,
			baseStats: { hp: 95, atk: 60, def: 60, spa: 101, spd: 70, spe: 105 },
		},
		tinkaton: {
			inherit: true,
			baseStats: { hp: 85, atk: 90, def: 77, spa: 70, spd: 105, spe: 94 },
		},
		bombirdier: {
			inherit: true,
			baseStats: { hp: 70, atk: 113, def: 95, spa: 60, spd: 85, spe: 82 },
		},
		revavroom: {
			inherit: true,
			baseStats: { hp: 80, atk: 119, def: 90, spa: 54, spd: 67, spe: 100 },
		},
		houndstone: {
			inherit: true,
			baseStats: { hp: 72, atk: 111, def: 100, spa: 50, spd: 97, spe: 68 },
			types: ["GHOST", "GROUND"],
		},
		flamigo: {
			inherit: true,
			baseStats: { hp: 82, atk: 115, def: 74, spa: 75, spd: 74, spe: 90 },
		},
		veluza: {
			inherit: true,
			baseStats: { hp: 90, atk: 112, def: 73, spa: 78, spd: 65, spe: 100 },
		},
		dondozo: {
			inherit: true,
			baseStats: { hp: 100, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
		},
		tatsugiri: {
			inherit: true,
			baseStats: { hp: 68, atk: 50, def: 60, spa: 120, spd: 95, spe: 92 },
		},
		okidogi: {
			inherit: true,
			baseStats: { hp: 88, atk: 128, def: 115, spa: 58, spd: 80, spe: 80 },
		},
		hydrapple: {
			inherit: true,
			baseStats: { hp: 106, atk: 80, def: 110, spa: 130, spd: 80, spe: 44 },
		},
		chikorita: {
			inherit: true,
			types: ["GRASS", "FAIRY"],
		},
		bayleef: {
			inherit: true,
			types: ["GRASS", "FAIRY"],
		},
		cyndaquil: {
			inherit: true,
			types: ["FIRE", "NORMAL"],
		},
		quilava: {
			inherit: true,
			types: ["FIRE", "NORMAL"],
		},
		typhlosion: {
			inherit: true,
			types: ["FIRE", "NORMAL"],
		},
		feraligatr: {
			inherit: true,
			types: ["WATER", "DARK"],
		},
		misdreavus: {
			inherit: true,
			types: ["GHOST", "FAIRY"],
		},
		granbull: {
			inherit: true,
			types: ["FAIRY", "FIGHTING"],
		},
		stantler: {
			inherit: true,
			types: ["NORMAL", "PSYCHIC"],
		},
		smoochum: {
			inherit: true,
			types: ["PSYCHIC", "ICE"],
		},
		sceptile: {
			inherit: true,
			types: ["GRASS", "DRAGON"],
		},
		zigzagoon: {
			inherit: true,
			types: ["NORMAL", "DARK"],
		},
		mismagius: {
			inherit: true,
			types: ["GHOST", "FAIRY"],
		},
		shaymin: {
			inherit: true,
			types: ["GRASS", "FLYING"],
		},
		pignite: {
			inherit: true,
			types: ["FIRE", "DARK"],
		},
		emboar: {
			inherit: true,
			types: ["FIRE", "DARK"],
		},
		dewott: {
			inherit: true,
			types: ["WATER", "FIGHTING"],
		},
		samurott: {
			inherit: true,
			types: ["WATER", "FIGHTING"],
		},
		vanillite: {
			inherit: true,
			types: ["ICE", "FAIRY"],
		},
		vanillish: {
			inherit: true,
			types: ["ICE", "FAIRY"],
		},
		vanilluxe: {
			inherit: true,
			types: ["ICE", "FAIRY"],
		},
		inteleon: {
			inherit: true,
			types: ["WATER", "DARK"],
		},
		runerigus: {
			inherit: true,
			types: ["GHOST", "GROUND"],
		},
		ursaluna: {
			inherit: true,
			types: ["NORMAL", "GROUND"],
		},
		sinistcha: {
			inherit: true,
			types: ["GHOST", "GRASS"],
		},
		flapple: {
			inherit: true,
			otherFormes: ["Flapple-Gmax"],
		},
		flapplegmax: {
			inherit: true,
			baseSpecies: "Flapple",
			forme: "Gmax",
			baseStats: { hp: 110, atk: 125, def: 100, spa: 100, spd: 50, spe: 100 },
			isMega: true,
			requiredItem: "Flappletunita",
			isNonstandard: null, // <-- MUY IMPORTANTE: permite usarla
		},
		/*
		butterfree: {
		inherit: true,
		//baseStats: { hp: 60, atk: 45, def: 50, spa: 100, spd: 100, spe: 90 },
		otherFormes: ["Butterfree-Gmax"],
	},
	butterfreegmax: {
		inherit: true,
		baseSpecies: "Butterfree",
		forme: "Gmax",
		isGigantamax: true,
		isNonstandard: null, // <-- MUY IMPORTANTE: permite usarla */
	};
