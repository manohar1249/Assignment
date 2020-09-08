let arr = [["brand","ford"],["model","mustang"],["year","1998"]];

let f = function(arr){
    let obj ={
        
    };
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<(arr[i].length)-1;j++){
            obj[arr[i][j]] = arr[i][j+1];
        }
    }
    console.log(obj);
}
f(arr);
