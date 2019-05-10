var checkPage = {}

module.exports = {
    beforeEach: browser => {
        checkPage = browser.page.checkObjects()
        checkPage.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Check Numbers': browser => {

    checkPage  
        .verify.visible('[class="puzzleFeed"]', 'Evens and Odds')
        .setValue('@numberField', '1,2,3,4,5,6,7,8,9')
        .click('[name="evenOddButton"]')
        .waitForElementPresent('@evenField')
    checkPage
        .expect.element('@evenField').text.to.be.contain('[2,4,6,8]')
    checkPage
        .expect.element('@oddField').text.to.be.contain('[1,3,5,7,9]')
    },

    'Check Objects': browser => {
    checkPage
        .setValue('@objectField', 'name')
        .click('[name="objectFilterButton"]')
        .pause(3000)
    },

   
        
    
}
