import HomePage from '../pageobjects/homepage.js'

describe('Testing for Captcha', () => {
    // it('should open the Home Page', async () => {
    //     await HomePage.Open()
    // })
    // it('Should open the Home Page and the LeaderBoard Banner', async () => {
    //     await HomePage.Open()
    //     await HomePage.LeaderBoardBanner()
    // })
    // it('should open the Home Page and click the Adidas Logo', async () => {
    //     await HomePage.Open()
    //     await HomePage.AdidasLogo()
    // })
    it('should open the Home Page and click the Social Media Icon', async () => {
        await HomePage.Open()
        await HomePage.AdidasLogo()
    })

})

