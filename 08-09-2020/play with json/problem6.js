let arr = [[["brand","ford"],["model","mustang"],["year","1998"]],[["brand","tata"],["model","safari"],["year","1998"]]];

//console.log(arr[0]);

let f = function(arr){
    
    let obj = [{},{}];
    let count = 0;
     for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            
            for(let k=0;k<(arr[i][j].length)-1;k++){
              
                    obj[i][arr[i][j]]= arr[i][j+1];
                
            }
           // count++;
        }
    }
   console.log(obj);
}

f(arr);

