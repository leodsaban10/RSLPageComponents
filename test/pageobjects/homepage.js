import { expect } from '@wdio/globals'


class HomePage  {
    get Logo () {
        return $('//*[@alt="Adidas"]');
    } 
    get Banner () {
        return $('//*[@id="leaderboard-top"]');
    }
    get SocialMediaButton () {
        return $('//*[@data-log-event="logoClick"]');
    }
    async Open () {
        await browser.url('https://www.rsl.com/');
    }
    async AdidasLogo () {
        await this.Logo.click();
        await browser.switchWindow('https://www.rsl.com/')
    }
    async LeaderBoardBanner () {
        await this.Banner.click();
    }
    async SocialMedia () {
        await this.SocialMediaButton.click();
    }
    
}
export default new HomePage();
