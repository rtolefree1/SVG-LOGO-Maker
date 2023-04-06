const init = require('../index.js');
const { Circle } = require('./Circle.js');
const { Square } = require('./Square.js');
const { Triangle }= require('./Triangle.js');
let finalShape ='';

function createDocument(finalShape)
{

    const fillVal = finalShape.renderFill();


    return`

        <svg version="1.1" 
            width="300" height="200" 
            xmlns="http://www.w3.org/2000/svg">

            ${fillVal}
            <text x = "150" y="125" font-size="40" text-anchor="middle" fill="${finalShape.getTextColor()}">${finalShape.getNumberOfLetters()}</text>
        </svg>
    
    `


}

module.exports = createDocument

