let request = new XMLHttpRequest();
let urlrequest = "https://restcountries.eu/rest/v2/all";
request.open('GET',urlrequest,true);
request.send();

request.onload = function() {
  //response in string format
//console.log(this.response);
    
    // converting into json format
let data = JSON.parse(this.response)
//console.log(data[0]);
let res=data.reduce((initialTotal,data)=>{
    for(let key in data){
        if(key=="region" && data[key]=="Asia"){
            
                initialTotal=initialTotal+data["population"];
            
        }
    }
    return initialTotal;
},0);
console.log(res);
    let total=0;
    
   let pop= data.filter((data)=>{
        
        for(let key in data){
        if(key=="region" && data[key]=="Asia"){
            
                total=total+data["population"];
            //console.log(total);
            
        }
    }
        return total;
    })
    console.log(total);
}