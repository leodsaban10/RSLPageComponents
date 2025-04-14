import HomePage from '../pageobjects/homepage.js'

describe('Testing for Captcha', () => {
    // it('should open the RSL Home Page', async () => {
    //     await HomePage.OpenRSLPage()
    // })
    // it('Should open the Home Page and the LeaderBoard Banner', async () => {
    //     await HomePage.OpenRSLPage()
    //     await HomePage.LeaderBoardBanner()
    // })
    // it('should open the Home Page and click the Adidas Logo', async () => {
    //     await HomePage.OpenRSLPage()
    //     await HomePage.AdidasLogo()
    // })
    // it ('should open rsl in spanish article one', async () => {
    //     await HomePage.OpenRSLPage()
    //     await HomePage.RSLEnEspanol_One()
    // })
    // it ('should open rsl in spanish article two', async () => {
    //     await HomePage.OpenRSLPage()
    //     await HomePage.RSLEnEspanol_Two()
    // })
    // it ('should open Latest News article one', async () => {
    //     await HomePage.OpenRSLPage()
    //     await HomePage.LatestNewsArticle_One()
    // })
    it('should open Latest News article two', async () => {
        await HomePage.OpenRSLPage()
        await HomePage.LatestNewsArticle_Two()
    })
})

