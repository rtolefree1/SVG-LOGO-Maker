const { Shape }= require('./shapes');

class Circle extends Shape
{
    // <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.getNumberOfLetters()}</text>
//<rect width="100%" height="100%" fill="" />
    renderFill()
    {
        return `<circle cx="150" cy="120" r="70" fill="${this.getShapeColor()}"/>`
    
    }

    getShape()
    {
        return 'Circle';
    }

}

module.exports = { Circle }