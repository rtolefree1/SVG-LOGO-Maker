const init = require('../index.js');
const circleItem = require('./Circle.js');
const squareItem = require('./Square.js');
const triangleItem = require('./Triangle.js');


function createDocument()
{
    const indexVal = new init();


    return`

        <svg version="1.1" 
            width="300" height="200" 
            xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="red" />

        <circle cx="150" cy="100" r="80" fill="${indexVal.sColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${indexVal.tColor}">${indexVal.nLetters}</text>

        </svg>
    
    `


}

module.exports = createDocument