const { Shape }= require('./shapes');

class Square extends Shape
{ // <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.getNumberOfLetters()}</text>

    renderFill()
    {// <rect width="100%" height="100%" fill="white" />
        return `
        <rect width="100%" height="100%" fill="${this.getShapeColor()}"  />
        <rect cx="100" cy="100" r="70" />
        `
    
    }

    getShape()
    {
        return 'Sqaure';
    }

}

module.exports = { Square }