export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	 // --------------------------------------------------------
  // 🌿 Nueva habilidad personalizada: Piel Herbácea
  // --------------------------------------------------------
    realeza: {
        name: "Realeza",
        shortDesc: "El usuario obtiene STAB con todos los tipos (50% de potencia a todos sus movimientos).",
        desc: "El usuario recibe un bono del 50% al poder de todos sus ataques, incluso si no coinciden con su tipo. No se acumula con STAB normal.",
        
        onBasePower(basePower, attacker, defender, move) {
            // Si ya tiene STAB real, no aplicar el bonus
            if (attacker.hasType(move.type)) return;

            // De lo contrario, dar un STAB universal del 50%
            return this.chainModify(1.5);
        },
    },
 	silvano: {
        name: "Silvano",
        shortDesc: "Aumenta el daño de los ataques del usuario un 30% bajo Campo de Hierba.",
        desc: "Si el usuario está en Grassy Terrain, sus ataques hacen 1.3× daño.",

        onBasePower(basePower, attacker, defender, move) {
            // Solo afecta si el Pokémon que ataca tiene esta habilidad
            if (attacker.ability !== 'silvano') return;

            // Verifica que el campo activo sea Grassy Terrain
            if (attacker.field.isTerrain('grassyterrain')) {
                return this.chainModify(1.3); // +30% de daño
            }
        },
    },
	 parentalbond: {
        inherit: true,
        name: "Parental Bond",
        shortDesc: "Golpea dos veces; el segundo golpe hace el 50%. El primer golpe conserva efectos.",

        onPrepareHit(source, target, move) {
            if (move.multihit || move.flags['charge'] || move.isZ || move.isMax) return;

            // Fuerza dos golpes siempre
            move.multihit = 2;

            // NO quitamos efectos aquí
            // para que el primer golpe siga funcionando normal

            this.add('-ability', source, 'Parental Bond');
        },

        onHit(target, source, move) {
            // Si es el primer golpe (hit = 1), no hacemos nada → mantiene boosts
            if (move.hit === 1) return;

            // Si es el segundo golpe → quitar efectos secundarios y propios
            move.secondaries = null;
            move.self = null;
            move.selfBoost = null;
        },

        onModifyDamage(damage, source, target, move) {
            if (move.hit > 1) {
                return this.chainModify(0.5);
            }
        },
    },
  	coleoptero: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && (!noModifyType.includes(move.id) || this.activeMove?.isMax) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Bug';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Coleóptero",
		shortDesc: "Transforma los movimientos de tipo normal en bicho y los potencia un 20%",
		rating: 4,
		num: -1005,
	},	
	pielmaldita: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && (!noModifyType.includes(move.id) || this.activeMove?.isMax) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Ghost';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Piel Tétrica",
		shortDesc: "Transforma los movimientos de tipo normal en fantasma y los potencia un 20%",
		rating: 4,
		num: -1004,
	},	
pielelectrica: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && (!noModifyType.includes(move.id) || this.activeMove?.isMax) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Electric';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Piel eléctrica",
		shortDesc: "Transforma los movimientos de tipo normal en eléctrico y los potencia un 20%",
		rating: 4,
		num: -1003,
	},	
  pielherbacea: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && (!noModifyType.includes(move.id) || this.activeMove?.isMax) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Grass';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Piel Herbacea",
		shortDesc: "Transforma los movimientos de tipo normal en planta y los potencia un 20%",
		rating: 4,
		num: -1000,
	},
	acometida: {
		name: "Acometida",
		shortDesc: "Al entrar en combate, durante su primer turno obtiene +50% Velocidad y +20% Ataque.",
		
		// Cuando el Pokémon entra en el campo
		onStart(pokemon) {
			pokemon.addVolatile('acometida');
			this.add('-ability', pokemon, 'Acometida');
			this.add('-message', `${pokemon.name} se prepara para lanzarse con acometida!`);
		},

		// Definimos el estado volátil temporal que dura solo un turno
		condition: {
			duration: 1, // dura solo el primer turno activo

			onModifyAtk(atk, pokemon) {
				return this.chainModify(1.2); // +20% Ataque
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(1.5); // +50% Velocidad
			},

			onEnd(pokemon) {
				this.add('-message', `${pokemon.name} ya no está acometiendo.`);
			},
		},
	},
		sobrecarga: {
	name: "Sobrecarga",
	shortDesc: "Potencia los movimientos de tipo Eléctrico en un 50% cuando los PS están por debajo de 1/3.",
	desc: "Cuando los PS del Pokémon están en o por debajo de 1/3 de su máximo, el poder de sus movimientos de tipo Eléctrico aumenta en un 50%.",
	
	onBasePowerPriority: 28,
	onBasePower(basePower, attacker, defender, move) {
		if (move.type === 'Electric' && attacker.hp <= attacker.maxhp / 3) {
			this.debug('Conductividad boost');
			return this.chainModify(1.5);
		}
	},
	rating: 2.5,
	num: -1001,
	
},
albino: {
	name: "Albino",
	shortDesc: "Potencia los movimientos de tipo Hielo en un 30%.",
	desc: "Aumenta el poder de los movimientos de tipo Hielo en un 30%.",
	
	onBasePowerPriority: 28,
	onBasePower(basePower, attacker, defender, move) {
		if (move.type === 'Ice') {
			this.debug('Albino boost');
			return this.chainModify(1.3);
		}
	},
	rating: 3,
	num: -1002,
},
};