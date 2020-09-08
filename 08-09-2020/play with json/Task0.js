var cat = {
 name: 'Fluffy',
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}
cat.height = "2ft";
cat.weight = "3kg";
console.log(cat);
//updating fluffy name
cat["name"]="fluhhy";
console.log(cat["name"]);

//getting all activities of fluffy friends

for(let key in cat){
    if(key=="catFriends"){
        for(let i=0;i<cat[key].length;i++){
            for(let ab in cat[key][i]){
                if(ab=="activities"){
                    for(let bb in cat[key][i] ){
                        console.log(cat[key][i][bb]);
                    }
                }
            }
        }
    }
}

//getting cat friends names

for(let key in cat){
    if(key=="catFriends"){
        for(let i=0;i<cat[key].length;i++){
            for(let ab in cat[key][i]){
                if(ab=="name"){
                    console.log(cat[key][i][ab]);
                }
            }
        }
    }
}

//getting total weight of cat friends

let sum=0;
for(let key in cat){
    if(key=="catFriends"){
        for(let i=0;i<cat[key].length;i++){
            for(let ab in cat[key][i]){
                if(ab=="weight"){
                    sum=sum+cat[key][i][ab];
                }
            }
        }
    }
}
console.log("total weight of cat friends"+" "+sum);

// getting all cats activities
console.log("\n"+"printing all activities of all cats"+"\n");
for(let key in cat){
    if(key=="activities"){
        for(let i=0;i<cat[key].length;i++){
            console.log(cat[key][i]);
        }
    }
    else if(key=="catFriends"){
        for(let i=0;i<cat[key].length;i++){
            for(let ab in cat[key][i]){
                if(ab=="activities"){
                    for(let j=0;j<cat[key][i][ab].length;j++){
                        console.log(cat[key][i][ab][j]);
                    }
                }
            }
        }
    }
}

//adding activities to cats foo and bar
console.log("\n"+"adding activities to cats foo and bar");
for(let key in cat){
    if(key=="catFriends"){
        for(let i=0;i<cat[key].length;i++){
            for(let ab in cat[key][i]){
                if(ab=="activities"){
                    //console.log(cat[key][i][ab][2]);
                    cat[key][i][ab][2]="run";
                    cat[key][i][ab][3]="hunt";
                }
            }
        }
    }
}

//updating fur color of bar to black
console.log("\n"+"updating fur color of bar to black");
for(let key in cat){
    if(key=="catFriends"){
        for(let i=0;i<cat[key].length;i++){
            for(let ab in cat[key][i]){
                if(ab=="furcolor"){
                    cat[key][i][ab]="black";
                }
            }
        }
    }
}
