"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Monster_1 = require("./Monster");
var Warrior_1 = require("./Warrior");
var theWarrior = new Warrior_1.Warrior("Arthur", "lancer", 35);
var moonster = new Monster_1.Monster("Demonio");
moonster.infoMonster();
theWarrior.attackWarrior(moonster);
moonster.infoMonster();
