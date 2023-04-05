const { Shape }= require('./shapes');

class Circle extends Shape
{
//<rect width="100%" height="100%" fill="" />
    renderFill()
    {
        return `
        
        <circle cx="150" cy="100" r="80" fill="${this.getShapeColor()}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.getNumberOfLetters()}</text>`
    
    }

    getShape()
    {
        return 'Circle';
    }

}

module.exports = { Circle }