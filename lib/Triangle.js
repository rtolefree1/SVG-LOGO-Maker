const { Shape }= require('./shapes');

class Triangle extends Shape
{ 

    

    renderFill()
    {
        return `<polygon points="150, 10, 250, 210, 50, 210" fill="${this.getShapeColor()}" />`
    
    }

    getShape()
    {
        return 'Triangle';
    }

}

module.exports = { Triangle }