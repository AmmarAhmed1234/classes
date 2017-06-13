// let a : string = 'hello'
var human = (function () {
    function human(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    // setName(name: string){
    //     this.name = name;
    // }
    human.prototype.getName = function () {
        return this.firstname + " " + this.lastname;
    };
    return human;
}());
var h = new human('Ammar', 'Ahmed');
console.log('h :', h.getName());
////////  PRACTICE  ////////
var b = "John";
;
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name: " + b);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
//# sourceMappingURL=classes.js.map