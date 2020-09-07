let request = new XMLHttpRequest();
let urlrequest = "https://restcountries.eu/rest/v2/all";
request.open('GET',urlrequest,true);
request.send();

request.onload = function() {
  //response in string format
//console.log(this.response);
    
    // converting into json format
let data = JSON.parse(this.response)
console.log(data);
    for(let i=0;i<data.length;i++){
        for(let key in data[i]){
            //geting data based on country which is india
            if(key=="name" && data[i][key]=="India" ){
  console.log(data[i]);

    }

        }
    }
}