const fs = require("fs");

function loadTSObject(path) {
    let text = fs.readFileSync(path, "utf8");

    // Quitar "exports.xxx =" o "export const xxx ="
    text = text.replace(/exports\.\w+\s*=\s*/g, "");
    text = text.replace(/export const \w+\s*=\s*/g, "");

    // Quitar anotaciones TypeScript tipo ": string"
    text = text.replace(/:\s*\w+/g, "");

    // Quitar interfaces, tipos o cualquier cosa antes del primer "{"
    const first = text.indexOf("{");
    const last = text.lastIndexOf("}");
    text = text.substring(first, last + 1);

    try {
        return eval("(" + text + ")");
    } catch (e) {
        console.error("❌ Error al interpretar archivo:", path);
        console.error(e);
        process.exit(1);
    }
}

console.log("Cargando archivo base...");
const base = loadTSObject("data1.ts");

console.log("Cargando archivo de cambios...");
const changes = loadTSObject("data2.ts");

// Aplicar cambios
for (const id in changes) {
    if (!base[id]) continue;

    if (changes[id].baseStats) base[id].baseStats = changes[id].baseStats;
    if (changes[id].types) base[id].types = changes[id].types;
}

const output = "exports.BattlePokedex = " + JSON.stringify(base, null, 2) + ";\n";

fs.writeFileSync("merged.js", output);
console.log("✔ Archivo generado correctamente: merged.js");
