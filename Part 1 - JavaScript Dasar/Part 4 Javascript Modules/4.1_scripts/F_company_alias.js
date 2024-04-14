const company=" PT. Bank Central Asia .Tbk";

function multiply(first, second) {
    return first * second;
}

class Company{
    constructor(compName,compAddres){
        this.compName = compName;
        this.compAddres = compAddres;
    }

    greetings(name,university){
        console.log((`Testing - LDO Hello You ${name} from ${university}, Welcome to Our ${this.compName} at ${this.compAddres} ! \n`));
    }

}

export{company, multiply,Company};