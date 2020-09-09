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
let res=data.map((data)=>{
    for(let key in data){
        if(key=="population"){
            
                data[key]=data[key]+200000;
            
        }
    }
    return data;
})
console.log(res);
    
}