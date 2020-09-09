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
    let arr=[];
    let count=0;
    for(let key in data){
        if(key=="name" || key=="flag" || key=="capital"){
             
            arr[count]=data[key];
            count++;
        }
    }
    return arr;
})
console.log(res);
    
}