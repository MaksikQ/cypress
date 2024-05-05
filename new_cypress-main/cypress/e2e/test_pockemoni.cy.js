import * as main_page from "../locators/main_page_pockemons.json"
import * as data from "../helpers/pockemons.json"

describe('End to end покупка аватара', function () {

   beforeEach('Начало теста', function () {
         cy.visit('https://pokemonbattle.me/');
           });



   it('Тест на покупку нового аватара', function () {
        cy.get(main_page.login).type(data.login);
        cy.get(main_page.password).type(data.password);
        cy.get('.auth__button').click(); 
        cy.get('.header__btns > [href="/shop"]').click(); 
        cy.get('.available  > button').first().click();
        cy.get('.credit').type('4620869113632996');                   
        cy.get('.k_input_ccv').type('125');                   
        cy.get('.k_input_date').type('1225');                         
        cy.get('.k_input_name').type('NAME');                        
        cy.get('.pay-btn').click();                                 
        cy.get('#cardnumber').type('56456');                         
        cy.get('.payment__submit-button').click();                   
        cy.contains('Покупка прошла успешно').should('be.visible'); 
        cy.get('.payment__adv').click();    
        cy.get('.top_menu_exit').click();
    })
})