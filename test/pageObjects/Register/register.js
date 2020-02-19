let Utility = require("../../../main/Util.js");
let WelcomeScreen = require("../WelcomeScreen/welcomeScreenPage");

class Register {
  /**
   * Navigating through the welcome screen and validating each text displayed on the Welcome screens
   * @param {Object of ObjectRepostory } ObjectRepo
   * @param {Object of Data provider } dataprovider
   */
  async navigateThroughWelcome(ObjectRepo, dataprovider) {
    await WelcomeScreen.getWelcomeScreen(ObjectRepo, dataprovider);
  }

  /**
   * Navigating to Register Screen and validating the page
   * @param {Object of ObjectRepostory } ObjectRepo
   * @param {Object of Data provider } dataprovider
   */
  async navigateToRegisterPage(ObjectRepo, dataprovider) {
    //Clicking on the register button
    await Utility.clickOn(ObjectRepo.welcomescreen.RegisterButton);
    //Validating the User landed on Create Account Page
    await expect(
      await Utility.getText(ObjectRepo.Register.createRetailerText)
    ).toEqual(dataprovider.Register.valid.creatAccountText);
  }

  //Entering the FullName
  async writefullName(ObjectRepo, dataprovider) {
    await Utility.writeText(ObjectRepo.Register.fullName, dataprovider);
  }

  //Selecting the drop down
  async selectDropDown(ObjectRepo) {
    //Verifying the drop down text
    await Utility.clickOn(ObjectRepo.Register.typeOfMerchant);
    //Accepting the option
    await Utility.clickOn(ObjectRepo.Register.optionOfMerchant);
  }

  //Entering the Phone Number
  async writePhoneNumber(ObjectRepo, dataprovider) {
    await Utility.writeText(ObjectRepo.Register.phoneNumber, dataprovider);
  }

  //Entering the Password
  async writePassword(ObjectRepo, dataprovider) {
    await Utility.writeText(ObjectRepo.Register.currentPassword, dataprovider);
  }

  //Entering the Confirm Password
  async writeConfirmPassword(ObjectRepo, dataprovider) {
    await Utility.writeText(ObjectRepo.Register.confirmPassword, dataprovider);
  }

  //Selecting the checkbox and verifying the terms and conditions
  async checkboxIagree(ObjectRepo, dataprovider) {
    await Utility.clickOn(ObjectRepo.Register.iAgreeCheckbox);
    await expect(
      await Utility.getText(ObjectRepo.Register.iAgreeTextBoxSection)
    ).toEqual(dataprovider);
  }

  async clickOn_RegisterButton(ObjectRepo) {
    await Utility.clickOn(ObjectRepo.Register.CreateRegisterButton);
  }
}

module.exports = new Register();
