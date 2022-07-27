class FrontEnd {
    constructor(name){
        if(FrontEnd.instance == null){
            FrontEnd.instance = this;
            this.type = 'FrontEnd dev';
            this.value = Math.random(100);
        }
        return {...FrontEnd.instance, name};
    }
}

class BackEnd {
    constructor(name){
        this.name = name;
        if(BackEnd.instance == null){
            BackEnd.instance = this;
            this.type = 'BackEnd dev';
            this.value = Math.random(100);
        }
        return {...BackEnd.instance, name};
    }
}

class DeveloperFactory{
    create(name, type){
        switch(type){
            case 1:
                return new FrontEnd(name);
                break;
            case 2:
                return new BackEnd(name);
                break;
        }
    }
}

const developerFactory = new DeveloperFactory();
const developers = [];

developers.push(developerFactory.create("René", 2));
developers.push(developerFactory.create("Tomás", 2));

console.log(developers);