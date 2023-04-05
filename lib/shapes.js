class Shape
{

    // call constructor
    constructor(shape)
    {
        this.color = '';
        this.tColor = '';
        this.nLetters = '';
        this.shape = shape;

    }

    setShapeColor(color)
    {
        this.color = color;
    }

    setTextColor(tColor)
    {
        this.tColor = tColor;

    }

    setNumberOfLetters(nLetters)
    {
        this.nLetters = nLetters;
    }

    setShape(shape)
    {
        this.shape = shape;
    }

    getShapeColor()
    {
        return this.color;
    }

    getTextColor()
    {
        return this.tColor;
    }

    getNumberOfLetters()
    {
        return this.nLetters;
    }

    
}


module.exports = { Shape }