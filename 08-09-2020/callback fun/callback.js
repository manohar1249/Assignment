let obj = {
    add : function(a,b){ return a+b;},
    sub : function(a,b){ return a-b;},
    mul : function(a,b){ return a*b;}
};

let f=function(opr,obj){
    
    let a=10;
    let b=5;
    for(let key in obj){
        if(key==opr){
            let res = obj[key];
            //console.log(res);
            console.log(res(a,b));
        }
    }
}

f("add",obj);