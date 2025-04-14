import { expect } from '@wdio/globals'


class HomePage  {
    get Adidas_Logo () {
        return $('//*[@alt="Adidas"]');
    } 
    get Banner () {
        return $('//*[@id="leaderboard-top"]');
    }
    get rslinspanisharticle_one () {
        return $('//*[@aria-label="1 / 10"]');
    }
    get rslinspanisharticle_two () {
        return $('//*[@aria-label="2 / 10"]');
    }
    get LatestNews_one () {
        return $('//*[@aria-label="1 / 16"]');
    }
    get LatestNews_two () {
        return $('//*[@aria-label="2 / 16"]');
    }
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
    async RSLEnEspanol_One () {
        await this.rslinspanisharticle_one.click();
        // await browser.switchWindow('https://www.rsl.com/rsl-en-espanol/index')
    }
    async RSLEnEspanol_Two () {
        await this.rslinspanisharticle_two.click();
    }
    async LatestNewsArticle_One () {
        await this.LatestNews_one.click();
    }
    async LatestNewsArticle_Two () {
        await this.LatestNews_two.click();
    }
}
export default new HomePage();
