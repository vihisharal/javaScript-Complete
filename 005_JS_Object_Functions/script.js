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