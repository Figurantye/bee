"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var Monster = /** @class */ (function () {
    function Monster(name) {
        this.name = name;
        this.health = 10;
        this.strenght = 50;
    }
    Monster.prototype.info = function () {
        console.log("Monster info \nname: ".concat(this.name, "; \nstrenght: ").concat(this.strenght, " \nhealth: ").concat(this.health));
    };
    Monster.prototype.attack = function (theWarrior) {
        var damage = this.strenght;
        theWarrior.reciveDamageWarrior(damage);
        console.log("o perigoso ".concat(this.name, " atacou ").concat(theWarrior.nameWarrior, " e causou ").concat(damage, " de dano"));
    };
    Monster.prototype.reciveDamage = function (damage) {
        this.health -= damage;
        console.log("o perigoso ".concat(this.name, " recebeu ").concat(damage, " de dano, restando somente ").concat(this.health, " de saude"));
    };
    Object.defineProperty(Monster.prototype, "strenghtMonster", {
        get: function () {
            return this.strenght;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "nameMonster", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "healthMonster", {
        get: function () {
            return this.health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "infoMonster", {
        get: function () {
            return this.info;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "attackMonster", {
        get: function () {
            return this.attack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "reciveDamageMonster", {
        get: function () {
            return this.reciveDamage;
        },
        enumerable: false,
        configurable: true
    });
    return Monster;
}());
exports.Monster = Monster;
