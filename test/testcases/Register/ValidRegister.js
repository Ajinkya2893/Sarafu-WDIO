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
   * Entering the User details in the registeration page
   **/

  it("Entering the Valid Retailer details", async () => {
    await pageObject.writefullName(
      ObjectRepo, //Object
      dataprovider.Register.valid.fullName //data
    );
    await pageObject.writePhoneNumber(
      ObjectRepo, //object
      dataprovider.Register.valid.phoneNumber //data
    );
    await pageObject.writePassword(
      ObjectRepo, //object
      dataprovider.Register.valid.password //data
    );
    await pageObject.writeConfirmPassword(
      ObjectRepo, //object
      dataprovider.Register.valid.confirmPassword //data
    );

    await pageObject.selectDropDown(ObjectRepo);

    await pageObject.checkboxIagree(
      ObjectRepo,
      dataprovider.Register.valid.checkBoxText
    );

    await pageObject.clickOn_RegisterButton(ObjectRepo);
  });
});
