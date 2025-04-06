import HomePage from '../pageobjects/homepage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await HomePage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})

