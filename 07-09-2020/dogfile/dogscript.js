let request = new XMLHttpRequest();
let urlrequest = "https://dog.ceo/api/breeds/list/all";
request.open('GET',urlrequest,true);
request.send();

request.onload = function() {
  //response in string format
//console.log(this.response);
    
    // converting into json format
let data = JSON.parse(this.response)
console.log(data);
    
}