let request = new XMLHttpRequest();
let urlrequest = "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
let proxy = "https://cors-anywhere.herokuapp.com/"
request.open('GET',proxy+urlrequest,true);
request.send();

request.onload = function() {
  //response in string format
//console.log(this.response);
    
    // converting into json format
let data = JSON.parse(this.response)
console.log(data);
    
}