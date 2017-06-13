// let a : string = 'hello'

class human {
    firstname: string
    lastname: string
    age: number
    constructor(fname: string,lname: string){
        this.firstname = fname;
        this.lastname = lname;
    }
    // setName(name: string){
    //     this.name = name;
    // }

    getName() : string {
        return this.firstname + " "  + this.lastname
    }
}

const h = new human ('Ammar', 'Ahmed')
console.log('h :', h.getName());  

////////  PRACTICE  ////////

var b : string = "John";;
var score1:number = 50;
var score2:number = 42.50;
var sum = score1 + score2;
console.log("name: "+b);
console.log("first score: "+score1); 
console.log("second score: "+score2); 
console.log("sum of the scores: "+sum);