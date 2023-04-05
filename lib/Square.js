const { Shape }= require('./shapes');

class Square extends Shape
{ 

    renderFill()
    {// <rect width="100%" height="100%" fill="white" />
        return `
        <rect width="100%" height="100%" />
        <rect cx="150" cy="100" r="80" fill="${this.getShapeColor()}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.getNumberOfLetters()}</text>`
    
    }

    getShape()
    {
        return 'Sqaure';
    }

}

module.exports = { Square }