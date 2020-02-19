let Utility = require("../../../main/Util.js");

class WelcomeScreen {
  async verifyText(path, data) {
    await expect(await Utility.getText(path)).toEqual(data);
  }

  

  async getWelcomeScreen(ObjectRepo, dataprovider) {

    //FirstScreen
    await this.verifyText(
      ObjectRepo.welcomescreen.firstScreen.accessibletext,
      dataprovider.welcomeScreenPage.firstscreen.accessibletext
    );
    await this.verifyText(
      ObjectRepo.welcomescreen.firstScreen.desc,
      dataprovider.welcomeScreenPage.firstscreen.desc
    );

    Utility.moveElement(925, 1424, 127, 1424);

    await this.verifyText(
      ObjectRepo.welcomescreen.secondScreen.accessibletext,
      dataprovider.welcomeScreenPage.secondscreen.accessibletext
    );
    await this.verifyText(
      ObjectRepo.welcomescreen.secondScreen.desc,
      dataprovider.welcomeScreenPage.secondscreen.desc
    );

    Utility.moveElement(925, 1424, 127, 1424);

    await this.verifyText(
      ObjectRepo.welcomescreen.thridScreen.accessibletext,
      dataprovider.welcomeScreenPage.thridscreen.accessibletext
    );

    await this.verifyText(
      ObjectRepo.welcomescreen.thridScreen.desc,
      dataprovider.welcomeScreenPage.thridscreen.desc
    );
  }
}

module.exports = new WelcomeScreen();
