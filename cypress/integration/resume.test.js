describe("Renders Resume Link", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Focuses on resume link and asserts its attributes", () => {
    cy.findAllByText("Resume").focus()
    cy.focused()
      .should("have.text", "Resume ")
      .should(
        "have.attr",
        "href",
        "/static/NickMonacoResume_20200201-c8acbfefd13d82c9330947ca493fbc74.pdf"
      )
  })
})
