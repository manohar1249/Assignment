// checking Question and answer are same or not
let securityQuestions = [{
    question : "what is your name",
    answer : "manohar"
},
 {
      question : "what is your last name",
    answer : "chunchu"  
    }];
let a=function(securityQuestions,quest,ans){
    for(let i=0;i<securityQuestions.length;i++){
        let count=0;
        for(let key in securityQuestions[i]){
            
            if(key=="question"){
                if(securityQuestions[i][key]==quest){
                    count++;
                }
            }
            else if(key=="answer"){
                if(securityQuestions[i][key]==ans){
                    count++;
                }
            }
        }
        if(count==2){
            return true;
        }
    }
}

let res = a(securityQuestions,"what is your name","manohar");
console.log(res);