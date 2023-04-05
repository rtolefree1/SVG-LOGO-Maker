const { Shape }= require('./shapes');

class Triangle extends Shape
{ 

    

    renderFill()
    {
        return `
        
        <polygon points="220,10 300,210 170,250 123,234" fill="${this.getShapeColor()}" />
        <text x="220" y="150" font-size="40" text-anchor="middle" fill="${this.getTextColor()}">${this.getNumberOfLetters()}</text>`
    
    }

    getShape()
    {
        return 'Triangle';
    }

}

module.exports = { Triangle }