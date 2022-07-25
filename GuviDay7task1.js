class Person {
    constructor (name,age,height){
        this.personName = name;
        this.personAge = age;
        this.personHeight = height;
    }

    name(){
        console.log(this.personName);
    }

    age(){
        console.log(this.personAge);
    }

    height(){
        console.log(this.personHeight);
    }

    idealWeight(){
        let inmtr = (this.personHeight/100);
        let wgt = 22*(2*inmtr);
        console.log(wgt);
    }
}

const Person1 = new Person ('Navin', 24 , 150);
Person1.name();
Person1.age();
Person1.height();
Person1.idealWeight();