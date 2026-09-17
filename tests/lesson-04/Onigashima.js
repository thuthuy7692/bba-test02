
const pirates = [
    { name: "Thuy", bounty: 100, strength:400},
    { name: "Hang", bounty: 200, strength:100},
    { name: "Dung", bounty: 400, strength:800},
];
function upgradeCrew() {
    const awakenedPirates = pirates.map(pirate => ({
        name: pirate.name.toUpperCase(),
        bounty: pirate.bounty * 2,
        strength: pirate.strength * 1.5
    }));
    const monsterTrioCandidates = awakenedPirates.filter(awakenedPirate => awakenedPirate.strength > 500);
    return { awakenedPirates,monsterTrioCandidates };
}
const result = upgradeCrew();
console.log (result);