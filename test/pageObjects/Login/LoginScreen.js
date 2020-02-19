let Utility = require("../../../main/Util.js");
let WelcomeScreen = require("../WelcomeScreen/welcomeScreenPage.js");

class Login {
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

  /**
   * Writing the username/Phone number
   *  @param {Object of ObjectRepostory } ObjectRepo
   * @param {Object of Data provider } dataprovider
   */
  async writeUserName(ObjectRepo, dataprovider) {
    await Utility.writeText(ObjectRepo.Login.phoneNumber, dataprovider);
  }

  /**
   * Writing the Password
   *  @param {Object of ObjectRepostory } ObjectRepo
   * @param {Object of Data provider } dataprovider
   */
  async writePassword(ObjectRepo, dataprovider) {
    await Utility.writeText(ObjectRepo.Login.password, dataprovider);
  }

  /**
   * Clicking on Login Button
   *  @param {Object of ObjectRepostory } ObjectRepo
   */
  async clickLoginButton(ObjectRepo) {
    await Utility.clickOn(ObjectRepo.Login.loginButton);
  }

  /**
   * Skiping the login Page
   *  @param {Object of ObjectRepostory } ObjectRepo
   */
  async skipToWelcome(ObjectRepo) {
    await Utility.clickOn(ObjectRepo.Login.skipToWelcome);
    await expect(
      await Utility.getText(ObjectRepo.Login.loginContinueText)
    ).toEqual(dataprovider.Login.Valid.logintoContinuetext);
  }

  /**
   *  Login the user using all the functions
   *  @param {Object of ObjectRepostory } ObjectRepo
   *  @param {Object of Data provider } dataprovider
   */
  async getLogIn(ObjectRepo, dataprovider) {
    this.clickLoginButton(ObjectRepo, dataprovider);
    this.writeUserName(ObjectRepo, dataprovider);
    this.writePassword(ObjectRepo, dataprovider);
    this.clickLoginButton(ObjectRepo);
    this.verifyLogin(ObjectRepo, dataprovider);
  }

  /**
   *
   * Verifying the afterLogin
   * @param {Object of ObjectRepostory } ObjectRepo
   * @param {Object of Data provider } dataprovider
   */
  async verifyLogin(ObjectRepo, dataprovider) {
    await expect(await Utility.getText(ObjectRepo.Login.afterLogin)).toEqual(
      dataprovider
    );
  }
}

module.exports = new Login();
