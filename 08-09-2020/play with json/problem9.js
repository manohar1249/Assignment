let students =[{
    name : "manohar",
    age : 33
},
{
    name : "vijay",
    age : 19
}];

let a = function(students){
    let stu = [];
     let count=0;
      for(let i=0;i<students.length;i++){
       
          
        for(let key in students[i]){
            
            if(key=="age"){
                if(students[i][key]<20){
                    stu[count]=students[i]["name"];
                    count++;
                }
            }
        }
      }
    return stu;
}

console.log(a(students));