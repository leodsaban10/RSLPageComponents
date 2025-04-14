import HomePage from '../pageobjects/homepage.js'

describe('Testing for Captcha', () => {
    it('should open the RSL Home Page', async () => {
        await HomePage.OpenRSLPage()
    })
    it('Should open the Home Page and the LeaderBoard Banner', async () => {
        await HomePage.OpenRSLPage()
        await HomePage.LeaderBoardBanner()
    })
    it('should open the Home Page and click the Adidas Logo', async () => {
        await HomePage.OpenRSLPage()
        await HomePage.AdidasLogo()
    })
    it ('should open rsl in spanish article', async () => {
        await HomePage.OpenRSLPage()
        await HomePage.RSLEnEspanol()
    })
    // it('should open the Home Page and click the Social Media Icon', async () => {
    //     await HomePage.Open()
    //     await HomePage.DottedMenu()
    // })
    // it('should click the Espanol Button', async () => {
    //     await HomePage.Open()
    //     await HomePage.EspanolButton()
    // })

})

