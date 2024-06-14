//Part1
const adventurer = {
	name: "Robin",
	health: 10,
	inventory: ["sword", "potion", "artifact"],
	companion: {
		name: "Leo",
		type: "Cat",
	},
};

adventurer.companion.companion = {
	name: "Frank",
	type: "Flea",
	belongings: ["smallHat", "sunGlasses"],
};

adventurer.roll = function (mod = 0) {
	const result = Math.floor(Math.random() * 20) + 1 + mod;
	console.log(`${this.name} rolled a ${result}.`);
};

// adventurer.roll(2);
// adventurer.roll(2);

//Part2
class Character {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.inventory = [];
	}
	roll(mod = 0) {
		const result = Math.floor(Math.random() * 20) + 1 + mod;
		console.log(`${this.name} rolled a ${result}.`);
		return result;
	}
}
// let david = new Character("david");
// console.log(david.roll());

//part3
// class Adventurer extends Character {
// 	constructor(name, role) {
// 		super(name);
// 		// Adventurers have specialized roles.
// 		this.role = role;
// 		// Every adventurer starts with a bed and 50 gold coins.
// 		this.inventory.push("bedroll", "50 gold coins");
// 	}
// 	// Adventurers have the ability to scout ahead of them.
// 	scout() {
// 		console.log(`${this.name} is scouting ahead...`);
// 		super.roll();
// 	}
// }
// console.log(new Adventurer("Ava", "hunter"));

// class Companion {
// 	constructor(name, type) {
// 		this.name = name;
// 		this.type = type;
// 		this.inventory = [];
// 	}
// }

// let robin = new Adventurer("Robin", "Archer");
// let leo = new Companion("Leo", "Flea");
// leo.inventory = ["smallHat", "sunGlasses"];
// robin.companion = leo;

// console.log("Robin", robin);

//Part4
class Adventurer extends Character {
	constructor(name, role) {
		super(name);
		// Adventurers have specialized roles.
		this.role = role;
		// Every adventurer starts with a bed and 50 gold coins.
		this.inventory.push("bedroll", "50 gold coins");
	}
	// Adventurers have the ability to scout ahead of them.
	scout() {
		console.log(`${this.name} is scouting ahead...`);
		super.roll();
	}
	static max_health = 100;
	static roles = ["Fighter", "Healer", "Wizard"];
	static validRole(role) {
		return this.roles.includes(role);
	}
	static duel(adventurer1, adventurer2) {
		let res1 = adventurer1.roll();
		let res2 = adventurer2.roll();
		if (res1 > res2) {
			adventurer2.health -= 10;
		} else if (res2 > res1) {
			adventurer1.health -= 10;
		}
		if (adventurer1.health <= 50) {
			console.log(`${adventurer2.name} won!`);
		}
		if (adventurer2.health <= 50) {
			console.log(`${adventurer1.name} won!`);
		}
	}
}
let ava = new Adventurer("Ava", "hunter");
let lana = new Adventurer("Lana", "Dancer");
console.log("lana", lana);

Adventurer.duel(ava, lana);
Adventurer.duel(ava, lana);
Adventurer.duel(ava, lana);
Adventurer.duel(ava, lana);
Adventurer.duel(ava, lana);
Adventurer.duel(ava, lana);
Adventurer.duel(ava, lana);
Adventurer.duel(ava, lana);
console.log(ava.health, lana.health);
