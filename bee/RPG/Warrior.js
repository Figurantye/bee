"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var Warrior = /** @class */ (function () {
    function Warrior(name, type, strenght) {
        this.name = name;
        this.type = type;
        this.strenght = strenght;
        this.health = 100;
    }
    Warrior.prototype.info = function () {
        console.log("Warrior info \nname".concat(this.name, "; \nType: ").concat(this.type, " \nstrenght: ").concat(this.strenght, " \nhealth: ").concat(this.health));
    };
    Warrior.prototype.attack = function (moonster) {
        var damage = this.strenght;
        console.log("o poderoso ".concat(this.type, " de nome ").concat(this.name, " atacou o maldito ").concat(moonster.nameMonster, " e causou ").concat(damage, " de dano"));
        moonster.reciveDamageMonster(damage);
    };
    Warrior.prototype.reciveDamage = function (damage) {
        this.health -= damage;
        console.log("o poderoso ".concat(this.name, " recebeu ").concat(damage, ", restando somente ").concat(this.health, " de saude"));
    };
    Object.defineProperty(Warrior.prototype, "nameWarrior", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "typeWarrior", {
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "strenghtWarrior", {
        get: function () {
            return this.strenght;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "healthWarrior", {
        get: function () {
            return this.health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "infoWarrior", {
        get: function () {
            return this.info;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "attackWarrior", {
        get: function () {
            return this.attack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Warrior.prototype, "reciveDamageWarrior", {
        get: function () {
            return this.reciveDamage;
        },
        enumerable: false,
        configurable: true
    });
    return Warrior;
}());
exports.Warrior = Warrior;
