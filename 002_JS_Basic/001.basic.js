// variable define

var name='Vishal';
var surname="Gavali";
var age=29;
var haveJob;

// print in console of browser
console.log('First Name : ' + name +' Family Name: ' + surname + ' Age : ' + age+" Have Job : "+haveJob);

// change the value of haveJob
haveJob = false;

console.log('First Name : ' + name +' Family Name: ' + surname + ' Age : ' + age+" Have Job : "+haveJob);

var currentjob =prompt('What your current job ? : ');
console.log(currentjob);
alert('you are selected : '+currentjob);

// check condition function
function mycheck(value){
    console.log("\n");
    if(haveJob){    
        console.log("Condition true");
        console.log('First Name : ' + name +' Family Name: ' + surname + ' Age : ' + age+" Job : "+currentjob);   
    }
    else {
        console.log("Condition false");
        console.log('First Name : ' + name +' Family Name: ' + surname + ' Age : ' + age+" Job : "+'No'); 
    }    
}

// change the value of haveJob
haveJob = null; // work false in boolean case
console.log('\n\nhaveJob : '+haveJob);
mycheck(haveJob);


haveJob = undefined;  // work false in boolean case
console.log('\n\nhaveJob : '+haveJob);
mycheck(haveJob);


haveJob = false;  // work false in boolean case
console.log('\n\nhaveJob : '+haveJob);
mycheck(haveJob);

haveJob = 'false';  // work true in boolean case 
console.log('\n\nhaveJob : '+haveJob  + "\nString false that's why condition true");
mycheck(haveJob);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
///
// Operator In JS

var birthYear =1990;
var currentYear=2018;
console.log('Birth Year : ' + birthYear);
console.log('current Year : '+ currentYear);

var val = 2 + 234 / 3 * 5 - (3 + 3)
// 2 + 234 / 3 * 5 - 6 //since grouping have high presidence
// 2 + 78 * 5 - 6  //since *, and / have same presidence but higher than +,-
// 2 + 390 - 6   //since *, and / have same presidence but higher than +,-
// 392 - 6   //since +, and - have same presidence but left to right
// 386
console.log('Val :  '+ val);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
// if/else statement to avoid confusion always use strict operation
var name ='vishal'
var stillStudy='no';
console.log('stillStudy : '+stillStudy );
// === will don't do type conversion
// but in case == first type conversion then compair
function myprint(x,y,op,hand){
    console.log('x : '+x);
    console.log('y : '+y);    
    console.log('type of first(x) : '+(typeof x));
    console.log('type of second(y) : '+(typeof y));
    console.log('operator : '+op);
    console.log('hand : '+hand);
    
    if(hand==='l')
    {
        if(op==='===') console.log( "x===y : "+ (x===y) );
        if(op==='==') console.log( "x==y : "+ (x==y) );
    }
    if(hand==='r')
    {
        if(op==='===') console.log( "y===x : "+ (y===x) );
        if(op==='==') console.log( "y==x : "+ (y==x) );
    }
    console.log('\n\n');
}
myprint(stillStudy,'yes','===','l');
myprint(stillStudy,'yes','==','l');
myprint(stillStudy,'yes','===','r');
myprint(stillStudy,'yes','==','r');

stillStudy=false;
myprint(stillStudy,'false','===','l');
myprint(stillStudy,'false','==','l');
myprint(stillStudy,'false','===','r');
myprint(stillStudy,'false','==','r');

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
// switch-case statement
var guess="pune";
console.log('guess : '+guess);
switch(guess){
    case  'mumbai':
        console.log('you are not from pune.');
        break;
    case  'thane':
        console.log('you are not from pune.');
        break;
    case  'pune':
        console.log('you are from pune.');
        break;
    default :
        console.log('you are not from pune');
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
    Problem : A and B are two player get hight and age of both anyone with hight plus 2 times age is winner.
*/
ah=6.2;
aa=28;
bh=5.7;
ba=33;
console.log("Winner : " + ( (ah+aa*2)==(bh+ba*2) ?'draw':((ah+aa*2)>(bh+ba*2) ? 'A':'B')));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Function statement and function expression

// Function statement
function myfun(param){
    // some code
}

// Function expression
var myfun=function(param){
    // some code
}

//Expression
34+89;
var name ="vishal";

// Statement
if(true){
   // Some code   
}
   
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Array index is zero based
var student =['vishal','mahesh','pravin'];
var student_roll =new Array(1421,1324,1451);
console.log("students : " + student);
console.log("students_roll : " + student_roll);
student[0]='sachin';
console.log("students : " + student);

var mynotype = ['vishal','gavali',true,29];
console.log("mynotype : " + mynotype);

// push : add element at ent of array
console.log("mynotype.push('black')");
mynotype.push('black');
console.log("mynotype : " + mynotype);

// unshift :  add element at begining of array
console.log("mynotype.unshift('blur')");
mynotype.unshift('blur');
console.log("mynotype : " + mynotype);

// pop : remove element at ent of array
console.log("mynotype.pop()");
mynotype.pop();
console.log("mynotype : " + mynotype);

// shift : remove element at begining of array
console.log("mynotype.shift()");
mynotype.shift();
console.log("mynotype : " + mynotype);

// indexOf : show the index of element
console.log("mynotype.indexOf('sachin') : " + mynotype.indexOf('sachin'));

console.log("mynotype.indexOf(29) : " + mynotype.indexOf(29));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
