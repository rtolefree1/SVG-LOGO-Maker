//const { Shape }= require('../lib/shapes');
const { Triangle } = require('../lib/Triangle');


describe('Triangle', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    // Arrange
    // act 
    // assert
    describe('renderFill', () => {
      it('should take return correct color', () => {
        const triangle = new Triangle();
        triangle.setShapeColor('blue');
       // const result = triangle.getShapeColor
        expect(triangle.renderFill()).toEqual('<polygon points="150, 10, 250, 210, 50, 210" fill="blue" />');
      });
    });
  });