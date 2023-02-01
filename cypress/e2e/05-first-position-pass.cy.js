/// <reference types="cypress" />

const todos = require('../fixtures/threeTodos')

beforeEach( () => {

  cy
    .request('POST', '/todos/seed', todos)

  cy
    .visit('localhost:3000');

});

it('Has first todo item with text "wash dishes"', () => {

  cy
  .get('.todo')
  .should('have.length', 3)
  .eq(1)
  .should('contain.text', 'wash dishes');
  
});