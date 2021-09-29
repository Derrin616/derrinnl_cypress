 
//    _____                 _         __ __   __  
//   |  __ \               (_)       / //_ | / /  
//   | |  | | ___ _ __ _ __ _ _ __  / /_ | |/ /_  
//   | |  | |/ _ \ '__| '__| | '_ \| '_ \| | '_ \ 
//   | |__| |  __/ |  | |  | | | | | (_) | | (_) |
//   |_____/ \___|_|  |_|  |_|_| |_|\___/|_|\___/ 

//   Derrin.nl By @Derrin616 | https://derrin.nl

describe("Load derrin.nl", () => {
    it('Load', () => {
        cy.visit("/");
    });
});

describe("Navbar", () => {
    it("Check if items are visible", () => {
        cy.get('div.logo').should("be.visible");
    });

    it('Loop through navbar', () => {
        cy.get("#navbar")
            .should("be.visible")
            .children("#navbarText")
            .each(($el, indexParent) => {
                cy.wrap($el).find('a')
                    .click({
                        multiple: true
                    });
            });
        cy.visit("/");
    });
});

describe("Main titles", () => {
    it("Check if titles are visible", () => {
        cy.get(".derrin616-upbigtxt-txt").should("be.visible");
        cy.get(".derrin616-upbigtxt-down").should("be.visible");
    });
});

describe("Projecten", () => {
    it("Check if images are visible", () => {
        cy.get("#projecten > p").should("be.visible");
        cy.get("#projecten").find("img").should("be.visible");
    });

    it('Loop and click on every project and check everything', () => {
        cy.get("#projecten > div")
            .should("be.visible")
            .children(".project-los")
            .each(($el, indexParent) => {
                cy.wrap($el)
                    .click({
                        multiple: false
                    });
                cy.get('#project-img').should("be.visible");
                cy.get('#project-title').should("be.visible");
                cy.get('#project-text').should("be.visible");
                cy.get('[style="float:left;"] > .close').should("be.visible");
                cy.get('[style="float:right;"] > .close').should("be.visible").click();
            });
    });
});

describe("Ervaring", () => {
    it("Check if everything is visible", () => {
        cy.get("#ervaring > p:nth-child(3)").should("be.visible");
        cy.get('#ervaring').find("span").should("be.visible");
        cy.get('#ervaring').find("h5").should("be.visible");
    });
});

describe("Certificaten", () => {
    it("Check if everything is visible", () => {
        cy.get("#ervaring > p:nth-child(3)").should("be.visible");
        cy.get("#ervaring > div:nth-child(4)").should("be.visible").find(".col").should("be.visible");
    });
});

describe("Over mij", () => {
    it("Check if everything is visible", () => {
        cy.get("#overmij > div > div > div > div.col-sm.derrin616-colLeft > img").should("be.visible");
        cy.get("#overmij > div > div > div > div.col-sm.derrin616-colRight").should("be.visible");

    });
});

describe("Contact", () => {
    it("Check if everything is visible", () => {
        cy.get("#contactform > div").find("input").should("be.visible");
        cy.get("#contactform > div").find("#message").should("be.visible");
        cy.get("#contactform > div").find("button").should("be.visible");
    });

    it("Type text in the input fiels", () => {
        cy.get("#name").type("Derrin616 Testing Platform v1");
        cy.get("#email").type("testing@derrin.nl");
        cy.get('#message').type("This is an automated test by @derrin616 for derrin.nl");
        cy.get("#contactform > div").find("button").click();
        cy.get('#loader-1').should("be.visible");
        cy.get('#feedback1').should("be.visible");
    });
});

describe("Footer", () => {
    it("Check if everything is visible", () => {
        cy.get('.font').find("img").should("be.visible");
        cy.get('.font').should("be.visible");
        cy.get('.footer-social').find("a").should("be.visible");
    });
});