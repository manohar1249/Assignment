var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}
//changing atFaultForAccident to false;
console.log("changing atFaultForAccident to false");
for(let key in myCar){
    if(key=="accidents"){
        for(let i=0;i<myCar[key].length;i++){
            for(let a1 in myCar[key][i]){
                if(a1=="atFaultForAccident"){
                    myCar[key][i][a1]=false;
                }
            }
        }
    }
}
console.log(myCar);
//Print the dated of my accidents
console.log("\n"+"Print the dated of my accidents");
for(let key in myCar){
    if(key=="accidents"){
        for(let i=0;i<myCar[key].length;i++){
            for(let a1 in myCar[key][i]){
                if(a1=="date"){
                    console.log(myCar[key][i][a1]);
                }
            }
        }
    }
}
