let request = new XMLHttpRequest();
let urlrequest = "https://api.openweathermap.org/data/2.5/weather?q=Asia,india&appid=9619d39af219ba63791bf95deadc7fae";
request.open('GET',urlrequest,true);
request.send();

request.onload = function() {
  //response in string format
//console.log(this.response);
    
    // converting into json format
let data = JSON.parse(this.response)
console.log(data);
    
}