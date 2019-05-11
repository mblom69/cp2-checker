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
            .setValue('@numberInput', '1,2,3,4,5,6,7,8,9')
            .click('@numberButton')
            .waitForElementPresent('@evenResult')
        checkPage
            .expect.element('@evenResult').text.to.be.contain('[2,4,6,8]')
        checkPage
            .expect.element('@oddResult').text.to.be.contain('[1,3,5,7,9]')
    },

    'Check Objects name': browser => {
        checkPage
            .setValue('@objectInput', 'name')
            .click('@objectButton')
            .waitForElementPresent('@objectResult')
        checkPage
            .expect.element('@objectResult').text.to.contain('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]')
    },

    'Check Objects age': browser => { 
        checkPage
            .setValue('@objectInput', 'age')   
            .click('@objectButton')
            .waitForElementPresent('@objectResult')
        checkPage
            .expect.element('@objectResult').text.to.contain(' "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" ')
    },

    'Check Objects title': browser => { 
        checkPage
            .setValue('@objectInput', 'title')
            .click('@objectButton')
            .waitForElementPresent('@objectResult')
        checkPage
            .expect.element('@objectResult').text.to.contain(' "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" ')
    },

    'Check Objects title': browser => { 
        checkPage
            .setValue('@objectInput', 'hairColor')
            .click('@objectButton')
            .waitForElementPresent('@objectResult')
        checkPage
            .expect.element('@objectResult').text.to.contain(' "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" ')
    },

    'Check String "B" ': browser => { 
        checkPage
            .setValue('@stringInput', 'B')
            .click('@stringButton')
            .waitForElementPresent('@stringResult')
        checkPage
            .expect.element('@stringResult').text.to.contain('Blake')  
    },
    
    'Check String "J" ': browser => { 
        checkPage
            .setValue('@stringInput', 'J')
            .click('@stringButton')
            .waitForElementPresent('@stringResult')
        checkPage
            .expect.element('@stringResult').text.to.contain(' "James", "Jessica", "Jennifer"')  
    },

    'Check Palindrome "true" ': browser => { 
        checkPage
            .setValue('@palindromeInput', 'racecar')
            .click('@palindromeButton')
            .waitForElementPresent('@palindromeResult')
        checkPage
            .expect.element('@palindromeResult').text.to.contain('true')  
    }, 
    'Check Palindrome "false" ': browser => { 
        checkPage
            .setValue('@palindromeInput', 'marcel')
            .click('@palindromeButton')
            .waitForElementPresent('@palindromeResult')
        checkPage
            .expect.element('@palindromeResult').text.to.contain('false')  
    }, 

    'Check sum "pos" ': browser => { 
        checkPage
            .setValue('@sum1Input', '100')
            .setValue('@sum2Input', '50')
            .click('@sumButton')
            .waitForElementPresent('@sumResult')
        checkPage
            .expect.element('@sumResult').text.to.contain('150') 
    }, 

    'Check sum "neg" ': browser => { 
        checkPage
            .setValue('@sum1Input', '-4')
            .setValue('@sum2Input', '-12')
            .click('@sumButton')
            .waitForElementPresent('@sumResult')
        checkPage
            .expect.element('@sumResult').text.to.contain('-16')
    }, 

    'Check sum "neg" ': browser => { 
        checkPage
            .setValue('@sum1Input', '-40')
            .setValue('@sum2Input', '25')
            .click('@sumButton')
            .waitForElementPresent('@sumResult')
        checkPage
            .expect.element('@sumResult').text.to.contain('-15')
    }, 
}
