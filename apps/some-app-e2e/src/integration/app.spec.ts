import { getDiagram } from '../support/app.po';

describe('some-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should render the library diagram with an initialized canvas', () => {
    getDiagram().should('be.visible').within(() => {
      cy.get('canvas').should('be.visible').and(($canvas) => {
        const canvas = $canvas[0] as HTMLCanvasElement;
        expect(canvas.width).to.be.greaterThan(0);
        expect(canvas.height).to.be.greaterThan(0);
      });
    });
  });
});
