function topictitle(x){
    console.log("\n\n>>>>>>>>>>"+x+"<<<<<<<<<<<\n\n");
}

function subtopictitle(x){
    console.log("\n        >>>"+x+"<<<\n");
}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
topictitle('Variable');
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
topictitle('Operator');
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
topictitle('if-else demo');
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
topictitle('Switch-Case Statement');
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
topictitle('Problem Exercise');
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

function print(x){
  console.log(x);  
} 
   
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
topictitle('Array');
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
topictitle('Object');
// Object
var vishal = {
    name : 'vishal',
    lastname: 'Gavali',
    birthyear:1990
}
console.log('vishal : '+vishal);
console.log(vishal);
// to read object values
print('vishal.name : '+vishal.name);
print("vishal['name'] : "+vishal['name']);
var xyz ='lastname';
print("xyz : "+xyz);
print('vishal[xyz] : '+vishal[xyz]);

// update values
vishal.name = 'vish';
print('vishal.name : '+vishal.name);

// another way to create object
var rahul = new Object();
rahul.name='Rahul';
rahul.job='Bisnessman';
rahul.birthYear=31;
rahul.dream = 'money';
console.log('rahul : '+rahul);

console.log(rahul);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
topictitle('Object and methods');
// Object and methods
 var rahul = {
    name:'Rahul',
    job:'Bisnessman',
    birthYear:1987,
    dream : 'money',
    family:['mother','wife','father'],
     /*function expression*/
    calAge :function(birthYear){
        var currentYear=2018;
        return currentYear-birthYear;
    }
};
console.log('rahul : '+rahul);
console.log(rahul);
console.log('rahul.calAge(1987) : '+rahul.calAge(1987));
console.log('rahul.calAge(1985) : '+rahul.calAge(1985));

// updating calAge defination
rahul.calAge =function(){
    var currentYear=2018;
    return currentYear-this.birthYear;
};
rahul.age=rahul.calAge();
console.log('rahul : '+rahul);
console.log(rahul);
console.log('rahul.calAge() : '+rahul.calAge());
console.log('rahul.age : '+rahul.age);

// updating calAge defination
rahul.calAge =function(){
    var currentYear=2018;
    this.age= currentYear-this.birthYear;
};
console.log('rahul : '+rahul);
console.log(rahul);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
topictitle('Loops');
// Loops

subtopictitle("for");
// for loop
for(var i=1,j=2 ; i<=10;i++){
    print(i +' : '+ j*i);
}

subtopictitle("for increament");
// for loop
var names=['sachin','mahesh','pravin'];
for(var i=0;i<names.length ;i++){
    print(names[i]);
}

subtopictitle("for decreament");
// for loop
for(var i=names.length -1 ; i>=0 ;i--){
    print(names[i]);
}

subtopictitle("while loop");
// while loop
var max= 5;
while(max>0){
    print(max--);
}

subtopictitle("for using break");
// for using break
print('filter using : j*i > 10');
for(var i=0,j=3;;i++){
    print(i +' : '+ j*i);
    if(j*i > 10) {
        break;
    }
}

subtopictitle("for using continue");
// for using continue
print('filter using :  i % j == 0');
for(var i=0,j=4;i<10;i++){
    if(i % j == 0) {
        
        continue;
    }    
    print(i +' : '+ j*i);
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
topictitle('Problem-2');
// problem-2
/*
1.create array of person birthYear.
2.create empty array for to fill person thier respective age.
3.print which is young/teenager/old  18- / 18,18+,less 60 / above 60
4.create function which accept array of person year and do 2.,3. work
5.create funtion accept personyear as param and return ageCategary only 
*/
subtopictitle('Problem-2 part1');
var personbirthYear=[1934,1945,1956,1993,2006];
var personAge=[];
var ageCategary=[];
print('personbirthYear : '+personbirthYear);
print('personAge : '+ personAge);
print('ageCategary : '+ ageCategary);
for(i=0;i<personbirthYear.length;i++){
    var currentYear=2018;
    personAge.push(currentYear-personbirthYear[i]);
}
for(i=0;i<personAge.length;i++){
    var age=personAge[i];
    if(age<18){
      ageCategary.push('Teenage');  
    } else if(age<60){
        ageCategary.push('Young');
    }
    else ageCategary.push('Old');
}
print('personbirthYear : '+personbirthYear);
print('personAge : '+ personAge);
print('ageCategary : '+ ageCategary);

subtopictitle('Problem-2 part2');

var personbirthYear=[1934,1945,1956,1993,2006];
var personAge=[];
var ageCategary=[];
print('personbirthYear : '+personbirthYear);
print('personAge : '+ personAge);
print('ageCategary : '+ ageCategary);

function problem2a(personArr){
    var currentYear=2018;
    for(i=0;i<personbirthYear.length;i++){
        personAge.push(currentYear-personbirthYear[i]);
        var age=personAge[i];
        if(age<18){
          ageCategary.push('Teenage');  
        } else if(age<60){
            ageCategary.push('Young');
        }
        else ageCategary.push('Old');    
    }
}
problem2a(personbirthYear);
print('personbirthYear : '+personbirthYear);
print('personAge : '+ personAge);
print('ageCategary : '+ ageCategary);


subtopictitle('Problem-2 part3');

function problem2b(personArr){
    var currentYear=2018;
    var output=[];
    for(i=0;i<personbirthYear.length;i++){
        var age=currentYear-personbirthYear[i];
        if(age<18){
          output.push('Teenage');  
        } else if(age<60){
            output.push('Young');
        }
        else output.push('Old');    
    }
    return output;
}
var personbirthYear=[2004,1987,1967,1993,2012];
print('personbirthYear : '+personbirthYear);
print('problem2b(personbirthYear) : ' + problem2b(personbirthYear));
