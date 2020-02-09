/// <reference types="cypress" />

import { allSeries } from "async"

 
describe('Login Test1', function() {
    it('Check Greeting and Bill Due', function() {
      cy.visit('https://www.spectrum.net')
      cy.get('#cc-username').type('TamABHTX')
      cy.get('#cc-user-password').type('TDMteam01')
      cy.get('#shared-login-container > form > button').click()
      cy.contains('Good evening, tamabhtx.')
      cy.contains('8345780015915154')
      cy.get('#billing-summary-container > spectrum-dynamic-fixed-card > div > div.spectrum-card__content.ng-star-inserted > div:nth-child(2) > div.bill-details-row > div.bill-details > div > span.balance').contains('$0.00')
      cy.get('#sign-out').click()
    })
  })

  describe('Login Test2', function() {
    it('Verify Account Number of the test account', function() {
      cy.visit('https://www.spectrum.net')
      cy.get('#cc-username').type('TamABHTX')
      cy.get('#cc-user-password').type('TDMteam01')
      cy.get('#shared-login-container > form > button').click()
      cy.xpath("//span[text()='Account Number: ']/following::span[1]").contains('8345780015915154')
      cy.xpath("//span[text()='Account Number: ']/following::span[1]").
      cy.get('#sign-out').click()
    })
  })

  describe('API Test 1', () => {
      it('Get Test - Headers',()=>{
        cy.request('https://jsonplaceholder.typicode.com/todos/1')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')

      })
  })

  describe('API Test 2', () => {
    it('Get Test - Status',()=>{
     
      cy.request('https://jsonplaceholder.typicode.com/todos/1')
      .its('status')
      .should('equal', 200);
      

    })
})


describe('API Test 3', () => {
    it('Get Test - Body',()=>{
     
      cy.request('https://jsonplaceholder.typicode.com/todos/1')
      .its('body')
      .should('include', {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      });
      

    })
})
  

  