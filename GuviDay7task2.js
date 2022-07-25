class uberPrice {
    constructor (km){
        this.kilometer = km;
    }

    price(){
        if(this.kilometer<=100){
            let priceperkm = this.kilometer * 8;
            console.log(priceperkm);
        }else

        if(this.kilometer>100){
            let priceperkm1 = this.kilometer * 6;
            console.log(priceperkm1);
        }
    }
}

let Uberprice1 = new uberPrice (50);
Uberprice1.price();
let Uberprice2 = new uberPrice (100);
Uberprice2.price();
let Uberprice3 = new uberPrice (150);
Uberprice3.price();
let Uberprice4 = new uberPrice (99);
Uberprice4.price();