class Tv {

    constructor(brand,price,inches,status,volume=50,channel=1){
        this.brand=brand;
        this.channel=channel;
        this.inches=inches;
        this.price=price;
        this.inches=inches;
        this.status=status;
        this.volume=volume;
        
    }
    increaseVolume(v){
        if(v>100 || v<0){
            this.volume=50;
        }
        else{
            this.volume=v;
        }
    }
    
    decreaseVolume(v){
        if(v>100 || v<0){
            this.volume=50;
        }
        else{
            this.volume=v;
        }
    }
    changeChannel(n){
        if(n>50){
            
        }
        else{
            this.channel=n;
        }
    }
    checkStatus(){
        if(this.status=="on"){
            console.log(this.brand+" "+this.channel+" "+this.volume);
        }
        else{
            console.log(this.status);
        }
    }
    reset(){
        this.channel=1;
        this.volume=50;
    }

}

class Led extends Tv{
    constructor(brand,price,inches,status,volume,channel,screenthickness,energy,lifespan,refreshRate){
    super(brand,price,inches,status,volume,channel);
    this.screen=screenthickness;
    this.energy=energy;
    this.lifespan=lifespan;
    this.refreshRate=refreshRate;
    }
    displayDetails(){
        console.log(this.brand+" "+this.price+" "+this.inches+" "+this.screen+" "+this.energy+this.lifespan+this.refreshRate);
    }
}

class Plasma extends Tv{
    constructor(brand,price,inches,status,screenthickness,energy,lifespan,refreshRate){
    super(brand,price,inches,status);
    this.screen=screenthickness;
    this.energy=energy;
    this.lifespan=lifespan;
    this.refreshRate=refreshRate;
    }
    displayDetails(){
        console.log(this.brand+" "+this.price+" "+this.inches+" "+this.screen+" "+this.energy+this.lifespan+this.refreshRate);
    }
}

let t = new Led("panasonic",10000,55,"on",99,45,"2px","20W",10,"100/sec");
t.displayDetails();
t.checkStatus();