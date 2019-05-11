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
            .setValue('@numberInput', '0, .25')
            .click('@numberButton')
            .waitForElementPresent('@evenResult')
        checkPage
            .expect.element('@evenResult').text.to.be.contain('[0]')
        checkPage
            .expect.element('@oddResult').text.to.be.contain('[null]')
    },

    'Check Objects name': browser => {
        checkPage
            .setValue('@objectInput', 'length')
            .click('@objectButton')
            .waitForElementPresent('@objectResult')
        checkPage
            .expect.element('@objectResult').text.to.contain('[]')
    },

    'Check Objects age': browser => { 
        checkPage
            .setValue('@objectInput', '24')   
            .click('@objectButton')
            .waitForElementPresent('@objectResult')
        checkPage
            .expect.element('@objectResult').text.to.contain('[]')
    },

    'Check String "Q" ': browser => { 
        checkPage
            .setValue('@stringInput', 'Q')
            .click('@stringButton')
            .waitForElementPresent('@stringResult')
        checkPage
            .expect.element('@stringResult').text.to.contain('[]')  
    },
    
    'Check String "J" ': browser => { 
        checkPage
            .setValue('@stringInput', 'J')
            .click('@stringButton')
            .waitForElementPresent('@stringResult')
        checkPage
            .expect.element('@stringResult').text.to.contain(' "James", "Jessica", "Jennifer"')  
    },

    'Check Palindrome "false" ': browser => { 
        checkPage
            .setValue('@palindromeInput', 'marcel')
            .click('@palindromeButton')
            .waitForElementPresent('@palindromeResult')
        checkPage
            .expect.element('@palindromeResult').text.to.contain('false')  
    }, 

    'Check sum "neg" ': browser => { 
        checkPage
            .setValue('@sum1Input', 'e')
            .setValue('@sum2Input', '4')
            .click('@sumButton')
            .waitForElementPresent('@sumResult')
        checkPage
            .expect.element('@sumResult').text.to.contain('NaN') 
    }, 

    'Check sum "neg" ': browser => { 
        checkPage
            .setValue('@sum1Input', '3.5')
            .setValue('@sum2Input', '3.5')
            .click('@sumButton')
            .waitForElementPresent('@sumResult')
        checkPage
            .expect.element('@sumResult').text.to.contain('6')
    }, 

    
}