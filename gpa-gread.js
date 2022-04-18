

let name = prompt('Student name')
let department = prompt('Student department')
let roll = prompt('Student Roll')
let age = prompt('Student age')

let bn = prompt('Student Bangla')
let en = prompt('Student English')
let math = prompt('Student math')
let since = prompt('Student since')
let relaji = prompt('Student relajion')


//GPA----------------->

function getGpa(marks) {
    
    let gpa;

    if (marks >= 0 && marks < 33 ) {
        gpa = 0;
    } else if(marks >= 33 && marks < 40 ) {
        gpa = 1;
        
    }else if( marks >= 40 && marks < 50 ) {
        gpa = 2;
        
    }else if( marks >= 50 && marks < 60 ) {
        gpa = 3;
        
    }else if( marks >= 60 && marks < 70 ) {
        gpa = 3.5;
        
    }else if( marks >= 70 && marks < 80 ) {
        gpa = 4;
        
    }else if( marks >= 80 && marks <= 100 ) {
        gpa =  5;
        
    }

    
     return gpa;
    
}
 

//Gread----------------->

 
function getGread(marks) {
    
    let gread;

    if (marks >= 0 && marks < 33 ) {
        gread = 'F';
    } else if(marks >= 33 && marks < 40 ) {
        gread = 'D';
        
    }else if( marks >= 40 && marks < 50 ) {
        gread =  'C';
        
    }else if( marks >= 50 && marks < 60 ) {
        gread =  'B';
        
    }else if( marks >= 60 && marks < 70 ) {
        gread = 'A-';
        
    }else if( marks >= 70 && marks < 80 ) {
        gread = 'A';
        
    }else if( marks >= 80 && marks <= 100 ) {
        gread =  'A+';
        
    }

    
     return gread;
    
}

 


console.log(`

    Name : ${name}
    department : ${department}
    Roll : ${roll}
    Age : ${age}
    -------------------------------------------------------------------------->
    Subject             marks               GPA                          Gread           Result
    Bangla:             ${bn}               ${getGpa(bn)}                 ${getGread(bn)}
    Bangla:             ${en}               ${getGpa(en)}                 ${getGread(en)}
    Bangla:             ${math}             ${getGpa(math)}               ${getGread(math)}
    Bangla:             ${since}            ${getGpa(since)}              ${getGread(since)}
    Bangla:             ${relaji}           ${getGpa(relaji)}             ${getGread(relaji)}


`);



