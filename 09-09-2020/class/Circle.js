class Circle{
   
    constructor(radius,color){
        this.color=color;
        this.radius=radius;
    }
    
    getRadius(){
        console.log(this.radius);
    }
    getColor(){
        console.log(this.color);
    }
    getArea(){
        console.log(2*(22/7)*this.radius);
    }
    setRadius(r){
        this.radius=r;
    }
     setColor(r){
        this.color=r;
    }
}

let r = new Circle(3.0,"black");

r.getRadius();
r.getColor();
r.getArea();