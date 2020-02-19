let Utility = require("../../../main/Util.js");
let WelcomeScreen = require("../WelcomeScreen/welcomeScreenPage");

class ForgotPassword {
  /**
   * Navigating through the welcome screen and validating each text displayed on the Welcome screens
   * @param {Object of ObjectRepostory } ObjectRepo
   * @param {Object of Data provider } dataprovider
   */
  async navigateThroughWelcome(ObjectRepo, dataprovider) {
    await WelcomeScreen.getWelcomeScreen(ObjectRepo, dataprovider);
  }

  /**
   * Navigating through the Welcome Screen and Navigating to Login Screen
   * @param {Object of ObjectRepostory } ObjectRepo
   * @param {Object of Data provider } dataprovider
   */

  async navigateToLoginScreen(ObjectRepo, dataprovider) {
    await Utility.clickOn(ObjectRepo.welcomescreen.LoginButton);
    await expect(
      await Utility.getText(ObjectRepo.Login.loginContinueText)
    ).toEqual(dataprovider.Login.Valid.logintoContinuetext);
  }

  async navigateToForgotPassword(ObjectRepo, dataprovider) {
    await Utility.clickOn(ObjectRepo.Login.forgotPassword);
    await expect(
      await Utility.getText(ObjectRepo.ForgotPassword.forgotpasswordPageText)
    ).toEqual(dataprovider);
  }

  async verifyForgotPassword(ObjectRepo, dataprovider) {
    await expect(
      await Utility.getText(ObjectRepo.ForgotPassword.verifyForgotPassword)
    ).toEqual(dataprovider);
  }
}

module.exports = new ForgotPassword();
