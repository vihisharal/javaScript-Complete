"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function print(x) {
    console.log(x);
}

function topictitle(x) {
    console.log("\n\n>>>>>>>>>>" + x + "<<<<<<<<<<<\n\n");
}

function subtopictitle(x) {
    console.log("\n    >>>" + x + "<<<\n");
}

function end() {
    print('\n/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\n\n');
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*

////////////// Lecture let and const //////////////
topictitle('Lecture let and const');
*/

/*

//ES5
subtopictitle('ES5: Declaration');

var name5 = 'vishal';
var age5=29;
name5='sachin';
print(name5);


//ES6
subtopictitle('ES6 :Declaration');
const name6='vishal';
let age6 =29;
name6 ='sachin';
print(name6);
*/

/*

//ES5
subtopictitle('ES5: var is functional scope in function');
function test5(passTest){
    if(passTest){
        var name='vishal';
        var age=29;
    }
    print(name+' : '+age);
}
test5(true);


//ES6
subtopictitle('ES6 : let and const are block scope in function');
function test6(passTest){
    if(passTest){
        let name='vishal';
        const age=29;
    }print(name+' : '+age);
}
test6(true);
*/

/*

//ES5
subtopictitle('ES5: var in loop');
var i=10;
for(var i=0;i<5;i++){
    print(i);
}
print(i);

//ES6
subtopictitle('ES6 : let in loop');
let j=10;
for(let j=0;j<5;j++){
    print(j);
}
print(j);
*/

/*

// Lecture : Block and IIFEs
subtopictitle('Lecture : Block and IIFEs');

{
    var a5=12;
    let a6=33;
}
//ES5
subtopictitle('ES5');
print(a5);

//ES5
subtopictitle('ES6');
print(a6);
*/

/*

////////////// Lecture : String //////////////
subtopictitle('Lecture : String');

let firstName = 'vishal';
let lastName = 'gavali';
const yearOfBirth=1990;

function calAge(year){
    return 2018-year;
}

//ES5
subtopictitle('ES5');
print(firstName +' '+lastName+' year of birth:'+yearOfBirth+ ' age:'+calAge(yearOfBirth));

//ES6
subtopictitle('ES6');
print(`${firstName} ${lastName} year of birth:${yearOfBirth} age:${calAge(yearOfBirth)}`); //using backtek insteaed of quotation-mark

const n=`${firstName} ${lastName}`;
print("n: "+n);
print("n.startsWith('v') :"+ n.startsWith('v'));
print("n.startsWith('V') :"+ n.startsWith('V'));

print("n.endsWith('i') :"+ n.endsWith('i'));
print("n.endsWith('I') :"+ n.endsWith('I'));

print("n.includes('sha') :"+ n.includes('sha'));
print("n.includes('Sha') :"+ n.includes('Sha'));

print("n.repeat(5) :"+ n.repeat(5));
*/

/*
 ////////////// Lecture: Arrow Function Basic //////////////
topictitle('Lecture: Arrow Function Basic');

const years=[1990,1993,1994,1999];

// ES5
subtopictitle('ES5');
var ages5 =years.map(function(current){
    return 2018-current;
});
print(ages5);

//ES6
subtopictitle('ES6');
let ages6=years.map(current => 2018-current);
print(ages6);

ages6= years.map((cur,index) => `${index+1} : ${cur} => Age ${2018-cur}`);
print(ages6);

ages6= years.map((cur,index) => {
    const now=new Date().getFullYear();
    const age=now - cur;
    return `${index+1} . year of birth : ${cur}  Age : ${age}`;
});
print(ages6);
*/

/*
////////////// Lecture: Arrow Function 2 //////////////
topictitle('Lecture: Arrow Function 2');

subtopictitle('ES5');
var box5={
    color:'green',
    position:1,
    clickMe: function(){
        var self=this; // comment and see the diff.
        document.querySelector('.green').addEventListener('click',function(){
            var str='this is box number '+self.position+' and its color is :'+self.color;
            alert(str);
        });
    }
}
//box5.clickMe();



subtopictitle('ES6');
// in this case 'this' point to box6 object   
const box6={
    color:'green',
    position:1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click',() => {
            var str='this is box number '+this.position+' and its color is :'+this.color;
            alert(str);
        });
    }
}
//box6.clickMe();


subtopictitle('ES61');
// in this case 'this' point to global  
const box61={
    color:'green',
    position:1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click',() => {
            var str='this is box number '+this.position+' and its color is :'+this.color;
            alert(str);
        });
    }
}
//box61.clickMe();

function Person(name){
    this.name =name;
}

// ES5
subtopictitle('ES5');

Person.prototype.myFriend5=function(friends){
    var arr=friends.map(function(cur){
        return this.name + ' is friens with '+cur;
    }.bind(this));
    print(arr);
}
var friends =['Pravin','Sachin','Mayur','Nitin'];
new Person('Vishal').myFriend5(friends);


// ES6
subtopictitle('ES6');

Person.prototype.myFriend6=function(friends){
    var arr=friends.map( cur => `${this.name}  is friens with ${cur}`);
    print(arr);
}
var friends =['Harshad','Mahesh','Akshay','Pratik'];
new Person('Nitin').myFriend6(friends);
*/

/*

////////////// Lecture : Destructuring //////////////
topictitle('Lecture : Destructuring');

//ES5
subtopictitle('ES5');

var vishal = ['Vishal', 29];
var name5 = vishal[0];
var age5 = vishal[1];
print('name : ' + name5);
print('age : ' + age5);

//ES5
subtopictitle('ES6');

const [name6, age6] = ['Vishal', 29];
print('name : ' + name6);
print('age : ' + age6);

const obj ={
    firstName:'Rahul',
    lastName:'Gavali'
};
const {firstName, lastName}= obj;
print(firstName);
print(lastName);

const {firstName : a, lastName : b}= obj;
print(a);
print(b);

function retirementAge(year){
    const age=new Date().getFullYear() -year;
    return [age,65-age];
}
const [age, retierment]=retirementAge(1990);
print('age : '+age);
print('retierment : '+retierment);
*/

/*
////////////// Lecture : Destructuring //////////////
topictitle('Lecture : Arrays');


const boxes=document.querySelectorAll('.box');


//ES5
subtopictitle('ES5');

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
   cur.style.backgroundColor='blue'; 
});


for(var i=0;i<boxesArr5.length;i++){
    if(boxesArr5[i].className ==='box blue'){
        continue;
    }
    boxesArr5[i].textContent='I change to yellow';
}

//ES6
subtopictitle('ES6');
boxesArr6=Array.from(boxes);
Array.from(boxes).forEach(cur=> cur.style.backgroundColor='green');

for(const cur of boxesArr6){
    if(cur.className.includes('green')){
        continue;
    }
    cur.textContent='I change to green';
}

//ES5
subtopictitle('ES5');

var ages = [12,15,19,11,23];
var young=ages.map(function(cur){
    return cur >= 18;
});
print(young);
print(young.indexOf(true));
print(ages[young.indexOf(true)]);

//ES6
subtopictitle('ES6');
print(ages.findIndex(cur=> cur>= 18));
print(ages.find(cur=> cur>=18));
*/

/*
////////////// Lecture : Spread Operator //////////////
topictitle('Lecture : Spread Operator');

function addAges(a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addAges(18, 3, 12, 21);
print('sum1 : ' + sum1);

//ES5
subtopictitle('ES5');

var ages = [18, 3, 12, 21];
var sum2 = addAges.apply(null, ages);
print('sum2 : ' + sum2);

//ES5
subtopictitle('ES6');
const sum3 = addAges(...ages);
print('sum3 : ' + sum3);

const rahulF =['a','b','c'];
const vishalF =['p','q','r'];
const all = [...rahulF, 'g' , ...vishalF];
print(all);

const h= document.querySelector('h1');
const boxes=document.querySelectorAll('.box');
const alls= [h, ...boxes];

Array.from(alls).forEach(cur=>cur.style.color='purple');
*/

/*
////////////// Lecture : Rest Parameters //////////////
topictitle('Lecture : Rest Parameters');


//ES5
subtopictitle('ES5');

function isFullAges5(){
    print(arguments); //object type
    var argArr=Array.prototype.slice.call(arguments);
    print(argArr); // Array type
    
    argArr.forEach(function(cur){
       var now=new Date().getFullYear();
       print('Bith Year: '+cur+'\t Age : '+(now-cur));    
    });
    
}

isFullAges5(1990,1992,1995);

//ES5
subtopictitle('ES6');

function isFullAges6(...years){
    print(years); //Array type
    years.forEach(cur=>{
       var now=new Date().getFullYear();
       print('Bith Year: '+cur+'\t Age : '+(now-cur));    
    });
}
isFullAges6(1990,1992,1995);


//ES5
subtopictitle('ES5');

function isFullAges5(limit){
    print(arguments); //object type
    var argArr=Array.prototype.slice.call(arguments,1);
    print(argArr); // Array type
    var now=new Date().getFullYear();
    argArr.forEach(function(cur){       
       print('Bith Year: '+cur+'\t Age : '+(now-cur)+'\t Young : '+(limit<(now-cur)) );    
    });
    
}

isFullAges5(21,1990,1992,1995);

//ES5
subtopictitle('ES6');

function isFullAges6(limit,...years){
    print(arguments); //Array type
    years.forEach(cur=>{
       var now=new Date().getFullYear();
       print('Bith Year: '+cur+'\t Age : '+(now-cur)+'\t Young : '+(limit<(now-cur)) );    
    });
}
isFullAges6(18,1990,1992,2007,1995);
*/

/*
////////////// Lecture : Default Parameters //////////////
topictitle('Lecture : Default Parameters');

//ES5
subtopictitle('ES5');

function Person5(firstName,birthYear,nationality,lastName){
    lastName===undefined ? lastName='Gavali':lastName;
    nationality===undefined ? nationality='Indian':nationality;
    this.firstName=firstName.toUpperCase();
    this.lastName=lastName.toUpperCase();
    this.birthYear=birthYear;
    this.nationality=nationality.toUpperCase();
}

var vishal=new Person5('vishal',1990);
print(vishal);    

//ES6
subtopictitle('ES6');
function Person6(firstName, birthYear, nationality='Indian', lastName='Gavali'){
    this.firstName=firstName.toUpperCase();
    this.lastName=lastName.toUpperCase();
    this.birthYear=birthYear;
    this.nationality=nationality.toUpperCase();
}
var mahesh=new Person6('mahesh',1993,'indian','bhatane');
print(mahesh);    
*/

/*
////////////// Lecture : Map //////////////
topictitle('Lecture : Map');

//ES6
subtopictitle('ES6');

const quation = new Map();
quation.set('quation','what is official name for js?');
quation.set(1,'ES5');
quation.set(2,'ES6');
quation.set(3,'ES2015');
quation.set(4,'ES7');
quation.set('correct',3);
quation.set(true,'Corrent Answer');
quation.set(false,'Wrong Answer');

print(quation);
print("quation.get('quation') : " + quation.get('quation'));
print("quation.get('currect') : " + quation.get('correct'));
print("quation.size : " + quation.size);
print("quation.delete(4) : " + quation.delete(4));
print("quation.has(4) : " + quation.has(4));
print("quation.size : " + quation.size);

quation.forEach((value,key)=>{
   print(`key : ${key}\t value : ${value} `); 
});

end();

for(let [key,value] of quation.entries()){
    print(`------- Key : ${key}\t Type of Key : ${typeof key}`); 
    if(typeof key   === 'number'){
        print(`Key : ${key}\t Value : ${value}`);
    }
}

end();

quation.clear();
print("quation.clear() : ");print(quation);
*/

/*
////////////// Lecture : Classes //////////////
topictitle('Lecture : Classes');

//ES5
subtopictitle('ES5');
var Person5 = function (name, year, job) {
    this.name = name.toUpperCase();
    this.year = year;
    this.job = job.toUpperCase();
}
Person5.prototype.calAge = function () {
    var age = new Date().getFullYear() - this.year;
    print(age);
}

var pravin = new Person5('pravin', 1992, 'software developer');
print(pravin);
pravin.calAge();

//ES6
subtopictitle('ES6');
class Person6 {
    constructor(name, year, job) {
        this.name = name.toUpperCase();
        this.year = year;
        this.job = job.toUpperCase();
    }
    calAge() {
        var age = new Date().getFullYear() - this.year;
        print(age);
    }
    
    static greeting(){
        print('Hello Brother!');
    }
}

var harshad = new Person6('harshad', 1993, 'Karate Master');
print(harshad);
harshad.calAge();
// harshad.greeting(); // Since greeting is static method belongs to class Person6 we can this method like below     
Person6.greeting();
*/

/*
////////////// Lecture : Classes with Subclasses //////////////
topictitle('Lecture : Classes with Subclasses');

//ES5
subtopictitle('ES5');
var Person5 = function (name, year, job) {
    this.name = name.toUpperCase();
    this.year = year;
    this.job = job.toUpperCase();
};
Person5.prototype.calAge = function () {
    var age = new Date().getFullYear() - this.year;
    print(age);
}

var Athlete5 = function (name, year, job, olympicGames, medals) {
    Person5.call(this, name, year, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function () {
    this.medals++;
    print(this.medals);
}

var suresh = new Athlete5('suresh', 1992, 'Yoga', 2, 5);
print(suresh);
suresh.calAge();
suresh.wonMedal();
print(suresh);

//ES6
subtopictitle('ES6');
class Person6 {
    constructor(name, year, job) {
        this.name = name.toUpperCase();
        this.year = year;
        this.job = job.toUpperCase();
    }
    calAge() {
        var age = new Date().getFullYear() - this.year;
        print(age);
    }
}
class Athlete6 extends Person6 {
    constructor(name, year, job, olympicGames, medals) {
        super(name, year, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        print(this.medals);
    }
}
var harshad= new Athlete6('harshad',1993,'boxing',2,20);
print(harshad);
harshad.calAge();
harshad.wonMedal();
print(harshad);
*/

/*
////////////// Lecture : Challenge Code : By Self//////////////
topictitle('Lecture : Challenge Code By Self');

var TownElement5=function(name,year){
    this.name=name;
    this.year=year;
};

var Park5=function(name,year,area,noOftrees){
    TownElement5.call(this,name,year);
    this.area=area;
    this.noOftrees=noOftrees;
};

Park5.prototype = Object.create(TownElement5.prototype);
Park5.prototype.density=function(){
    var density=this.noOftrees/this.area;
    density=density.toFixed(2);
    return density;
}

var park1 = new Park5('Park 1',1950,1100,5700);
var park2 = new Park5('Park 2',1975,550,4100);
var park3 = new Park5('Park 3',1966,150,1600);
var park4 = new Park5('Park 4',1988,100,1900);

var Parks5 = new Map();
Parks5.set(1,park1); //key = park1 , value=1
Parks5.set(2,park2);
Parks5.set(3,park3);
Parks5.set(4,park4);
var totalAge=0;

Parks5.forEach(function(key,value){
    totalAge+=key.year;
});
print(`Our ${Parks5.size} parks have an average age of ${totalAge/Parks5.size}`);  

Parks5.forEach(function(key,value){
    print(`${key.name} has a tree desity of ${key.density()} trees/km`);
});

Parks5.forEach(function(key,value){
    if(key.noOftrees > 2000){
        print(`${key.name} has more than 2000 tress.`);
    }
});

var Street5=function(name,year,slength,sSize='normal'){
    TownElement5.call(this,name,year);
    this.sSize=sSize;
    this.slength=slength;
};
Street5.prototype = Object.create(TownElement5.prototype);
var street1 = new Street5('Street 1',1999,15,'tiny');
var street2 = new Street5('Street 2',2002,12.5,'big');
var street3 = new Street5('Street 3',2007,13.7,'small');
var street4 = new Street5('Street 4',2010,7.7,'huge');
var street5 = new Street5('Street 5',2015,14.6,);

var Streets5=new Map();
Streets5.set(1,street1);
Streets5.set(2,street2);
Streets5.set(3,street3);
Streets5.set(4,street4);
Streets5.set(5,street5);
var totalLenght=0;
Streets5.forEach(function(key,value){
    totalLenght+=key.slength;
});
print(`Our ${Streets5.size} streets has total length ${totalLenght} km with an average of ${totalLenght/Streets5.size} km`);

Streets5.forEach(function(key,value){
    print(`${key.name}, built in ${key.year}, is ${key.sSize} street`);
});
*/

////////////// Lecture : Challenge Code : By Jonas//////////////
topictitle('Lecture : Challenge Code By Jonas');

var Element = function Element(name, bYear) {
    _classCallCheck(this, Element);

    this.name = name.toUpperCase();
    this.bYear = bYear;
};

var Park = function (_Element) {
    _inherits(Park, _Element);

    function Park(name, bYear, area, numTreess) {
        _classCallCheck(this, Park);

        var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, bYear));

        _this.area = area;
        _this.numTreess = numTreess;
        return _this;
    }

    _createClass(Park, [{
        key: "treeDensity",
        value: function treeDensity() {
            var density = (this.numTreess / this.area).toFixed(2);
            print(this.name + " has a tree density of " + density + " trees per square km.");
        }
    }]);

    return Park;
}(Element);

var Street = function (_Element2) {
    _inherits(Street, _Element2);

    function Street(name, bYear, sLength) {
        var sSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

        _classCallCheck(this, Street);

        var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, bYear));

        _this2.sLength = sLength;
        _this2.sSize = sSize;
        return _this2;
    }

    _createClass(Street, [{
        key: "classfyStreet",
        value: function classfyStreet() {
            var classification = new Map();
            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'normal');
            classification.set(4, 'big');
            classification.set(5, 'huge');
            print(this.name + ", build in " + this.bYear + ", is a " + classification.get(this.sSize) + ".");
        }
    }]);

    return Street;
}(Element);

var allParks = [new Park('Park 1', 1987, 0.2, 215), new Park('Park 2', 1894, 2.9, 3541), new Park('Park 3', 1953, 0.4, 949)];

var allstreets = [new Street('Street 1', 1999, 1.1, 4), new Street('Street 2', 2008, 2.7, 2), new Street('Street 3', 2015, 0.8), new Street('Street 4', 1982, 2.5, 5)];

function calc(arr) {
    var sum = arr.reduce(function (prev, cur, index) {
        return prev + cur;
    }, 0);
    return [sum, sum / arr.length];
}

(function reportParks(p) {
    subtopictitle('PARK REPORT');

    // Density
    p.forEach(function (ele) {
        return ele.treeDensity();
    });

    // Average age
    var ages = p.map(function (ele) {
        return new Date().getFullYear() - ele.bYear;
    });

    var _calc = calc(ages),
        _calc2 = _slicedToArray(_calc, 2),
        totalAge = _calc2[0],
        avgAge = _calc2[1];

    print("Our " + p.length + " parks have an average of " + avgAge.toFixed(2) + " years.");

    //Which park has more than trees
    var i = p.map(function (ele) {
        return ele.numTreess;
    }).findIndex(function (ele) {
        return ele >= 1000;
    });
    print(i);
    print(p[i].name + " has more than 1000 trees.");
})(allParks);

(function reportStreets(s) {
    subtopictitle('Street Report');

    // total and average lenght of town's streets

    var _calc3 = calc(s.map(function (ele) {
        return ele.sLength;
    })),
        _calc4 = _slicedToArray(_calc3, 2),
        totalLength = _calc4[0],
        avgLength = _calc4[1];

    print("Our " + s.length + " streets have total length of " + totalLength.toFixed(2) + " km,with an average " + avgLength.toFixed(2) + ".");

    //Classify sizes
    s.forEach(function (ele) {
        return ele.classfyStreet();
    });
})(allstreets);
