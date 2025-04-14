import { expect } from '@wdio/globals'


class HomePage  {
    get Adidas_Logo () {
        return $('//*[@alt="Adidas"]');
    } 
    get Banner () {
        return $('//*[@id="leaderboard-top"]');
    }
    get rslinspanisharticle () {
        return $('//*[@aria-label="1 / 10"]');
    }
    // get threedotmenu () {
    //     return $('//*[@class="fa-icon-svg fa-icon-svg--horizontal-dots"]');
    // }
    // get espanolBtn() {
    //    return $('a[href="https://www.rsl.com/rsl-en-espanol/index"]')
    // }
    async OpenRSLPage () {
        await browser.url('https://www.rsl.com/');
    }
    async LeaderBoardBanner () {
        await this.Banner.click();
    }
    async AdidasLogo () {
        await this.Adidas_Logo.click();
        await browser.switchWindow('https://www.rsl.com/')
    }
    async RSLEnEspanol () {
        await this.rslinspanisharticle.click();
        // await browser.switchWindow('https://www.rsl.com/rsl-en-espanol/index')
    }
    // Not done yet
    // async DottedMenu  () { 
    //     await this.threedotmenu.click();
    //     // await browser.switchWindow('https://www.rsl.com/')
    // }
    // async EspanolButton() {
    //     await this.espanolBtn.waitForClickable({ timeout: 7000 });
    //     await this.espanolBtn.click();
    // }
}
export default new HomePage();
