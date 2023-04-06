const { Circle } = require('../lib/Circle');


describe('Circle', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    // Arrange
    // act 
    // assert
    describe('renderFill', () => {
      it('should take return correct color', () => {
        const circle = new Circle();
        circle.setShapeColor('bLUe');
       // const result = triangle.getShapeColor
        expect(circle.renderFill()).toEqual(`<circle cx="150" cy="120" r="70" fill="blue"/>`);
      });
    });
  });