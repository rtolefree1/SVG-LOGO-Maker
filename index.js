// Including packages needed for this application
const inquirer = require('inquirer');
const createDoc = require('./lib/document.js');
const fs = require('fs');
const { writeFile }= require('fs/promises');
const { join } = require('path');

const { Circle } = require('./lib/Circle.js');
const { Square } = require('./lib/Square.js');
const { Triangle }= require('./lib/Triangle.js');

//const { Square, Triangle, Circle }= require('./lib/shapes');

let nLetters = '';
let tColor = '';
let sColor = '';
let shape = '';
let finalShape = ''

class init{
    constructor()
    {
        this.nLetters = '';
        this.tColor = '';
        this.sColor = '';
        this.shape = '';

      console.log('init constructor')
    }

    run(){
        // Creating my quesitons
    const questions = 
    [
        {
            type: 'input',
            name: 'numOfLetters',
            message: 'Please enter in your logo(up to three letters): ',
            validate (input)  
            {
                if(input.length > 3)
                {
                     return "ERROR: Please check you input is less than 3 letters"
                }
                
                    return true;
            }
            
            
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter the text color: '
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose shape from list: ',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the shape color: '
        },
    ];

        inquirer.prompt(questions)
        .then(answers =>{
        //  checkNumberOfLetters(answers);
        console.log('Letters input',answers.numOfLetters);
        console.log('color of text', answers.textColor);
        console.log('color of background', answers.shapeColor)
        console.log('shape', answers.shape);

        nLetters = answers.numOfLetters;
        tColor = answers.textColor;
        sColor = answers.shapeColor;
        shape = answers.shape;
        

        if(shape === 'Square'){
            finalShape = new Square();
            finalShape.setShapeColor(sColor);
            finalShape.setTextColor(tColor);
            finalShape.setNumberOfLetters(nLetters);
        }


        if(shape === 'Circle'){
            finalShape = new Circle();
            finalShape.setShapeColor(sColor);
            finalShape.setTextColor(tColor);
            finalShape.setNumberOfLetters(nLetters);
        }

        if(shape === 'Triangle'){
            finalShape = new Triangle();
            finalShape.setShapeColor(sColor);
            finalShape.setTextColor(tColor);
            finalShape.setNumberOfLetters(nLetters);
        }
            
        })
        .then(() =>{
            
        return writeFile(
                join(__dirname,'.','output','logo.svg'),
            createDoc(finalShape)
            );

            
        });

       
    }






}


new init().run();
module.exports = init