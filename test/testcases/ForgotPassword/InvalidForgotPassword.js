let ObjectRepo = require("../../resources/objectRepository/AndroidObjRepo.js");
let dataprovider = require("../../resources/objectRepository/dataprovider.js");

let pageObject = require("../../pageObjects/ForgotPassword/ForgotPassword.js");

describe("Resetting the password using forgot password for a wholeSeller", function() {
  /**
   * Navigating through the Welcome Screen using the function from Welcome Screen
   **/
  it("Navigating to Login Page", async () => {
    await pageObject.navigateThroughWelcome(ObjectRepo, dataprovider);
    await pageObject.navigateToLoginScreen(ObjectRepo, dataprovider);
  });

  //Verifying the user is at Forgot Password 
  it("Clicking on forgot password link", async () => {
    await pageObject.navigateToForgotPassword(
      ObjectRepo,
      dataprovider.ForgotPassword.InValid.forgotPasswordText
    );

    await pageObject.verifyForgotPassword(
      ObjectRepo,
      dataprovider.ForgotPassword.InValid.verifyForgotPassword
    );
  });

  it("Entering the User details and confirm reset", async () => {
    
  });

  it("Verifying and entering the otp number", async () => {});
});
