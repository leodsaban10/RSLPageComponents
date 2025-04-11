import { expect } from '@wdio/globals'


class HomePage  {
    get Logo () {
        return $('//*[@alt="Adidas"]');
    } 
    get Banner () {
        return $('//*[@id="leaderboard-top"]');
    }
    get threedotmenu () {
        return $('//*[@class="fa-icon-svg fa-icon-svg--horizontal-dots"]');
    }
    get espanolButton () {
        return $('//*[@href="https://www.rsl.com/rsl-en-espanol/index"]');
    }
    async Open () {
        await browser.url('https://www.rsl.com/');
    }
    async LeaderBoardBanner () {
        await this.Banner.click();
    }
    async AdidasLogo () {
        await this.Logo.click();
        await browser.switchWindow('https://www.rsl.com/')
    }
    async DottedMenu  () {
        await this.threedotmenu.click();
        // await browser.switchWindow('https://www.rsl.com/')
    }
    async EspanolButton () {
        await this.espanolButton.click();
        await browser.switchWindow('https://www.rsl.com/rsl-en-espanol/index')
    }
}
export default new HomePage();
