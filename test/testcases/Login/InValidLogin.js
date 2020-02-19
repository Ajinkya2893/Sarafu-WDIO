let ObjectRepo = require("../../resources/objectRepository/AndroidObjRepo.js");
let dataprovider = require("../../resources/objectRepository/dataprovider.js");

let pageObject = require("../../pageObjects/Login/LoginScreen.js");

describe("Login as a wholeSeller", function() {
  /**
   * Navigating through the Welcome Screen using the function from Welcome Screen
   **/
  it("Navigating to Login Page", async () => {
    await pageObject.navigateThroughWelcome(ObjectRepo, dataprovider);
    await pageObject.navigateToLoginScreen(ObjectRepo, dataprovider);
  });

  it("Entering the InValid User Login details", async () => {
    //Entering the username/Phone Number
    await pageObject.writeUserName(
      ObjectRepo,
      dataprovider.Login.InValid.phoneNumber
    );

    //Entering the password
    await pageObject.writePassword(
      ObjectRepo,
      dataprovider.Login.InValid.password
    );

    //Clicking on the login button
    await pageObject.clickLoginButton(ObjectRepo);
  });

  it("Verifying the user is logged in the system", async () => {
    //Verify the text for the next page after login
    await pageObject.verifyLogin(
      ObjectRepo,
      dataprovider.Login.InValid.afterLogin
    );
  });
});
