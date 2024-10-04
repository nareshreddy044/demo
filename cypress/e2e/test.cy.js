describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get("#navbar").should("exist")
    cy.xpath('(//ul[@class="home-list"]//li[1]//li)[1]//a').invoke("text").then((name)=>{
      cy.log(name)

      class big{
        bre(){
          cy.log("brrrreeeww")
        }
      }
      class small extends big{
        fea(){
          cy.log("feeeaaaa")
        }
      }
      const emo = new small()
      emo.bre()
      emo.fea()
    })
  })
})