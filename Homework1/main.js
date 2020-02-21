/* Antony Adamovich
*  main.js for Homework #1
*  Dr. Cheer-Sun Yang - CSC 404 - West Chester University
*  Created: 20-FEB-2020 - Last Edited: 20-FEB-2020
*  Description: 
*/

'use strict'

var prompt = require('prompt');
var gpa = 0;
 
// Start the prompt

prompt.start();

console.log('Please enter your name: ');
prompt.get(
[{
    name: 'name',
    required: true
}, {
    name: 'csc141grade',
    required: true
}, {
    name: 'csc142grade',
    required: true
}, {
    name: 'csc240grade',
    required: true
}, {
    name: 'csc241grade',
    required: true
}], 
function (err, result){
    console.log('Given Input: ' + result.name + ' ' + toGPA(result.csc141grade) + ' ' + result.csc142grade + ' ' + result.csc240grade + ' ' + result.csc241grade);
    console.log('Estimated GPA: ' + (toGPA(result.csc141grade) + ' ' + toGPA(result.csc142grade) + ' ' + toGPA(result.csc240grade) + ' ' + toGPA(result.csc241grade));
}

function toGPA(letterGrade){
    switch(letterGrade){
        case 'A':
            return 4;
            break;
        case 'B':
            return 3;
            break;
        case 'C':
            return 2;
            break;
        case 'D':
            return 1;
            break;
        case 'F':
            return 0;
            break;
        default:
            console.log('Error in toGPA. letterGrade is: ' + letterGrade);
            return -1;
            break;
    }
}


