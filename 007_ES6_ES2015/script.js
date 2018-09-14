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
    print('/*++++++++++++++++++++++++++++++++++++++++*/');
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

////////////// Lecture : Destructuring //////////////
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
      

// Video upto : 102 



