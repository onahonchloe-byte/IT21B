class Hero{
    #health

    constructor(name, health, attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getName(){
        return this.name;
    }

    getHealth() {
        return this.#health
    }
}
const hero1 = new Hero("Thorin", 100,10);
const hero2 = new Hero("Gandalf", 100, 8);

console.log(hero1.getName());
console.log(hero1.getHealth());
console.log(hero2.getName());
console.log(hero2.getHealth());

class Warrior extends Hero{
    useAbility(){
        console.log('${this.name} used Power Strike');
    
    }
}

hero1.showStats();
hero2.showStats();