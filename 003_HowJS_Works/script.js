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

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
topictitle('Hoisting');
// Hoisting

    // function Hoisting //
subtopictitle('function Hoisting');

calculateAge(2003);  // It's fine 
function calculateAge(year){
    print(2018-year);
}


//retierment(2011);   // Error 
var retierment=function(year){
    print(65 - (2018-year));
}
retierment(2011);  // This works fine 

    // variable Hoisting //
subtopictitle('variable Hoisting');


print(age);  // at this stage js knows it has variable age but is undefined
var age =28;   // this is ok but if no variable is globaly present in the script then it throws an error

function foo0(){
    // here function known no local variable age is defined so it also known their is global variable age so it use it
    print('\nfoo0: '+ age);
}
foo0();

function foo1(){
    // here in this case function it has local variable age inside it defined but at this stage that value is unknown
    print('\nfoo1: '+ age);
    var age =65;
    print('foo1: '+ age);
}
foo1();

function foo2(){
    // here in this case function it has local variable age inside it defined but at this stage that value is unknown
    print('\nfoo2: '+ age);
    {
        var age =65;
        print('foo2: '+ age);
    }
}
foo2();


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
topictitle('Scoping');
// Scoping

subtopictitle('Example: 1');
// Example : 1
var a= 'Hello!';
first(); 

function first(){
    var b ='Hi!';
    second();
    function second(){
        var c='Hey!';
        print(a+' '+b+' '+c);
    }
}

subtopictitle('Example: 2');
// Example : 2
var a= 'Hello!';
first(); 

function first(){
    var b ='Hi!';
    second();
    function second(){
        var c='Hey!';
        third();
    }
}
function third(){
    var d ='vishal';
    print(a);
    print(d);
    //print(b); // Error not in scope
    //print(c); // Error not in scope
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
topictitle('this Keywords');
// this Keywords

subtopictitle('Example 1');
//Example 1
print(this);

subtopictitle('Example 2');
//Example 2
function  calculateAge(year){
    print('Inside calculateAge function: ')
    print(">>>> "+ (2018-year));
    print(">>>> "+ this);
}
calculateAge(1993);


subtopictitle('Example 3');
//Example 3
var vishal ={
    name : 'vishal',
    yearOfBirth: 1990,
    calculateAge : function(){
        print(">>>> "+ this);
        print(this);
        print(">>>> "+ (2018-this.yearOfBirth));
        
        function innerFunction(){
            print('Inside innerFunction');
            print(">>>> "+ this);
        }
        innerFunction();
    }    
}
vishal.calculateAge();

// Rule : when regular function call happen then this will point to window object.
// when object called happen then this will point to object which is calling.


subtopictitle('Example 4 : function borrowing');
//Example 4 : function borrowing
var rahul = {
    name : 'Rahul',
    yearOfBirth:1987
}
// function borrowing
rahul.calculateAge = vishal.calculateAge;
rahul.calculateAge();

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
end();
