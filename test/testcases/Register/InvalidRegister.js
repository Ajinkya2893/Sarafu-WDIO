let ObjectRepo = require("../../resources/objectRepository/AndroidObjRepo.js");
let dataprovider = require("../../resources/objectRepository/dataprovider.js");

let pageObject = require("../../pageObjects/Register/register.js");

describe("Registeration for a wholeSeller", function() {
  /**
   * Navigating through the Welcome Screen using the function from Welcome Screen
   **/
  it("Navigating to Registeration Page", async () => {
    await pageObject.navigateThroughWelcome(ObjectRepo, dataprovider);
    await pageObject.navigateToRegisterPage(ObjectRepo, dataprovider);
  });

  /**
   * Invalid Test screens
   */

  it("Entering the InValid Retailer details", async () => {
    await pageObject.writefullName(
      ObjectRepo, //Object
      dataprovider.Register.InValid.fullName //data
    );
    await pageObject.writePhoneNumber(
      ObjectRepo, //object
      dataprovider.Register.InValid.phoneNumber //data
    );
    await pageObject.writePassword(
      ObjectRepo, //object
      dataprovider.Register.InValid.password //data
    );
    await pageObject.writeConfirmPassword(
      ObjectRepo, //object
      dataprovider.Register.InValid.confirmPassword //data
    );

    await pageObject.selectDropDown(ObjectRepo);

    await pageObject.checkboxIagree(
      ObjectRepo,
      dataprovider.Register.InValid.checkBoxText
    );

    await pageObject.clickOn_RegisterButton(ObjectRepo);
  });
});
