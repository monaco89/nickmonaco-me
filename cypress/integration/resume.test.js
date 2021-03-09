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
        "https://files.nickmonaco.me/NickMonacoResume.pdf"
      )
  })
})
