const { Square } = require('../lib/Square');


describe('Square', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    // Arrange
    // act 
    // assert
    describe('renderFill', () => {
      it('should take return correct color', () => {
        const square = new Square();
        square.setShapeColor('BLUE');
       // const result = triangle.getShapeColor
        expect(square.renderFill()).toEqual(`
        <rect width="100%" height="100%" fill="blue"  />
        <rect cx="100" cy="100" r="70" />
        `);
      });
    });
  });