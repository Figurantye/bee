import { Warrior } from "./Warrior"
export class Monster {
    private strenght: number
    private name: string
    private health: number

    constructor(name: string) {
        this.name = name
        this.health = 10
        this.strenght = 50
    }

    private info():void{
        console.log(`Monster info \nname: ${this.name}; \nstrenght: ${this.strenght} \nhealth: ${this.health}`);
    }
    
    private attack(theWarrior:Warrior):void{
        const damage = this.strenght
        theWarrior.reciveDamageWarrior(damage)
        console.log(`o perigoso ${this.name} atacou ${theWarrior.nameWarrior} e causou ${damage} de dano`);
    }


    private reciveDamage(damage:number){
        this.health -= damage
        console.log(`o perigoso ${this.name} recebeu ${damage} de dano, restando somente ${this.health} de saude`);
    }

    public get strenghtMonster(){
        return this.strenght
    }
    public get nameMonster(){
        return this.name
    }
    public get healthMonster(){
        return this.health
    }
    public get infoMonster(){
        return this.info
    }
    public get attackMonster(){
        return this.attack
    }
    public get reciveDamageMonster(){
        return this.reciveDamage
    }

}