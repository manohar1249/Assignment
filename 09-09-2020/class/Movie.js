class Movie{
   
constructor(title,studio,rating="PG"){
 this.title = title;
 this.studio = studio;
 this.rating = rating;
}

getPG(arr)
{
 return arr.filter((val)=>val.rating==="PG");
}

}
var movie1 = new Movie("Manam","Annapurna","A")
var movie2 = new Movie("Darling","Ramanaidu","U")
var movie3 = new Movie("Inside Out","Pixer")
var movie4 = new Movie("Ready Player Once","Disney")

console.log(movie1);

var moviearr = [movie1,movie2,movie3,movie4];
//console.log(moviearr)
var hmovie = new Movie("Casino Royale","Eon Productions","PG13")

let res = hmovie.getPG(moviearr);
console.log(res);

