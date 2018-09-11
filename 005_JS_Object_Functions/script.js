function print(x){
  console.log(x);  
} 
function topictitle(x){
    console.log("\n\n>>>>>>>>>>"+x+"<<<<<<<<<<<\n\n");
}

function subtopictitle(x){
    console.log("\n    >>>"+x+"<<<\n");
}

function end(){             print('/*++++++++++++++++++++++++++++++++++++++++*/');
}

topictitle('Function Constructor');
 // Function Constructor

var vishal ={
    name:'Vishal',
    yearOfBirth:1990,
    job:'none'
}

var Person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateAge =function(){
        return (2018-this.yearOfBirth);
}

Person.prototype.location='Pune';
Person.prototype.toString=function(){
    print(this.name+' '+this.yearOfBirth+' '+this.job+' '+ this.calculateAge()+' '+this.location)
}

var vishal =new Person('Vishal',1990,'Learning');

var sachin= new Person('Sachin',1993,'Software Develoaper');
vishal.toString();
sachin.toString();

print('vishal.__proto__ == Person.prototype  : ' + (vishal.__proto__ == Person.prototype));

print("vishal.hasOwnProperty('name') : "+ vishal.hasOwnProperty('name'));

print("vishal.hasOwnProperty('location') : "+ vishal.hasOwnProperty('location'));

print("vishal instanceof Person : " + (vishal instanceof Person) );


topictitle('Object create')
// Object .create
var personProto={
    calculateAge : function(){
        print(2018-this.yearOfBirth);
    }
}

var pravin = Object.create(personProto);
pravin.name='Pravin';
pravin.yearOfBirth=1993;
pravin.job='Content Writter';

var mahesh = Object.create(personProto,{
    name: {value : 'Mahesh'},
    yearOfBirth: {value : 1993},
    job : {value : 'Blogger'}
});



topictitle('Primitives vs Objects');
// Primitives vs Objects

subtopictitle('primitives');
// primitives
var a = 100;
var b = a;
a= 200;
print('a : ' + a);
print('b : ' + b);

subtopictitle('object');
// object
var obj1 = {
    name: 'object 1',
    age : 12
}

var obj2= obj1;
obj2.age =45;

obj2.name ='object 2';

print('Object1 : ');print(obj1);
print('Object2 : ');print(obj2);


subtopictitle('function');
// function
var age = 27;
var obj3 ={
    name : 'Object 3',
    city : 'Pune'  
}

print('Before : ');
print('age : ' + age);
print('obj3 : ');
print(obj3);

function change(a,b){
    age =35;
    a=28;    
    b.city='Mumbai';
}

print('change(age,obj3)');
change(age,obj3);

print('After : ');
print('age : ' + age);
print('obj3 : ');
print(obj3);


topictitle('Function');
// Function
var years =[1934,1943,1972,1927,2014];
function arrayCalc(arr,fn){
    var arrRes=[];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calAge(year){
    return 2018-year;
}

var ages=arrayCalc(years,calAge);
print(years);
print(ages);

function isAge(age){
    return age >= 18;
}

function maxHeartRate(age){
    if(age >= 18 && age <= 81){
        return Math.round(206.9-(0.67 - age));
    }
    return -1;
}

var result0=arrayCalc(ages,isAge); 
var result1=arrayCalc(ages,maxHeartRate); 
print(result0);
print(result1);


topictitle('Function returning function');
// Function returning function

subtopictitle('Example 1: function returning');
//Example 1: function returning

function interviewQuestion(job){
    switch(job)
    {
        case 'teacher' :
            return function(name){
                print('what subject you can teach '+name+'?');
            }
            break;
            
        case 'software develoaper' :
            return function(name){
                print('what stream you can do your best '+name+'?');
            }
            break;
            
        case 'manager' :
            return function(name){
                print('how do you handle this situation '+name+'?');
            }
            break;

        case 'work' :
            return function(name){
                return function(age){
                    if(age<18){
                        return function(study){
                            if(study ==='math') return 'work '+name+' '+age+' '+study+' Mathematics';
                            else if(study ==='physic') return 'work '+name+' '+age+' '+study+' Physics';
                            else return 'work '+name+' '+age+' '+study+' Marathi';
                        }
                    } else if( age<60){
                        return 'work '+name+' '+age+' Job';
                              
                    }
                    else return 'work '+name+' '+age+'Sleep';
                }
            }
            break;
            
        default :
            return function(name){
                print('Hello '+name+',what do you do?');
            }
    }
}
// way 1 to call fuction
var teacherQuestion=interviewQuestion('teacher');
var managerQuestion=interviewQuestion('manager');
var softwareDeveloaperQuestion=interviewQuestion('software develoaper');

teacherQuestion('Mahesh');
managerQuestion('Pravin');
softwareDeveloaperQuestion('Sachin');

// way2 call function
interviewQuestion('teacher')('Mr.Phadake');
interviewQuestion('manager')('Mr.Katake');
interviewQuestion('software develoaper')('Mr.Sager');
print( interviewQuestion('work')('Sahil')(16)('math'));


subtopictitle('Example 2: function returning');
//Example 2: function returning

function jodShedule(age){
    if(a>=18){
        return function(timming){
            if(timming==='day'){
                return function(post){
                    if(post==='teacher'){
                        return '10 AM Sunday';
                    }
                    else if(post==='manager'){
                        return '01 PM Wednesday';
                    }
                }
            }
            else if(timming==='night'){
                return function(post){
                    if(post==='watman'){
                        return '10 AM Tuesday';
                    }
                    else if(post==='telecaller'){
                        return '11 AM Friday';
                    }
                }                            
            }
        }
    }
    else {
        return 'No Job';
    }
}

print(jodShedule(18)('day')('teacher'));
// output:  10 AM sunday       

print(jodShedule(18)('night')('telecaller'));
// output:  11 AM Friday       

print(jodShedule(25)('day')('manager'));



subtopictitle('function: Immediately invoked function expression');
// function: Immediately invoked function expression
// normal invoke
function start(){
    var score=Math.random()*10;
    print('score : '+ score);
    print('score >=5 : ' +(score >=5));
}

start();

// immediately invoked
(function(){
    var score=Math.random()*10;
    print('score : '+ score);
    print('score >=5 : ' +(score >=5));
})();

(function(agr1){
    var score=Math.random()*10;
    print('score : '+ score);
    print('score >=5 : ' +(score >=5-agr1));
})(5);


subtopictitle('Closure');
// Closure
function retirement(retirementAge){
     var a=' years left until retirement.';
     return function(yearOfBirth){
         var age=2018-yearOfBirth;
         print( (retirementAge-age) + a);
     }
}
var retirementIN = retirement(65);
retirementIN(1990);
retirement(70)(1990);


subtopictitle('Bind ,Call and Apply');
// Bind ,Call and Apply
var vishal={
    name:'vishal',
    age:28,
    job:'laundry boy',
    presentation:function(style,timeOfDay){
        if(style==='formal'){
            print('Good '+timeOfDay+' ,ladies and gentalmen! I\'m '+this.name+' and I\'m a '+this.job+' and I\'m '+this.age+' years old.');
        }
        else if(style==='friendly'){
            print('Hey! What\'s up? This is really a good '+timeOfDay+' ,ladies and gentalmen! I\'m '+this.name+' and I\'m a '+this.job+' and I\'m '+this.age+' years old.');
        }        
    }
}

vishal.presentation('formal','morning');

var sachin ={
    name:'Sachin',
    age: 24,
    job:'Software Develoaper'
}

// Method borrowing

// Sachine want to define presentation function but vishal already implimented it so sachin want to use that one

subtopictitle('call function');
// Now here the call function intro
vishal.presentation.call(sachin,'friendly','Morning');

subtopictitle('apply function');
// Now here the apply function intro
vishal.presentation.apply(sachin,['formal','Afternoon']);

subtopictitle('bind function');
// Now here the bind function intro
var vishalFriendly=vishal.presentation.bind(vishal,'friendly');
vishalFriendly('Morning');
vishalFriendly('Afternoon');

var sachinFormal=vishal.presentation.bind(sachin,'formal');
sachinFormal('Morning');
sachinFormal('Afternoon');

print('\n\n\n');
