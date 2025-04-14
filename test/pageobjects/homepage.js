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
    get UtahRoyals_one () {
        return $('//*[@aria-label="1 / 12"]');
    }
    get UtahRoyals_two () {
        return $('//*[@aria-label="2 / 12"]');
    }
    get RSL_Logo () {
        return $('//*[@title="Real Salt Lake"]');
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
    async UtahRoyalsArticle_One () {
        await this.UtahRoyals_one.click();
    }
    async UtahRoyalsArticle_Two () {
        await this.UtahRoyals_two.click();
    }
    async RSL_LogoTopLeftCorner () {
        await this.RSL_Logo.click();
    }
}
export default new HomePage();
