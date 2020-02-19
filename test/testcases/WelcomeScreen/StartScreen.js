let ObjectRepo = require("../../resources/objectRepository/AndroidObjRepo.js");
let dataprovider = require("../../resources/objectRepository/dataprovider.js");
let pageObject = require("../../pageObjects/WelcomeScreen/welcomeScreenPage.js");
let Utility = require("../../../main/Util.js");

describe("Validating the Welcome Screen", function() {
  it("Verifying the First Screen and scrolling to next", async function() {
    await pageObject.verifyText(
      ObjectRepo.welcomescreen.firstScreen.accessibletext,
      dataprovider.welcomeScreenPage.firstscreen.accessibletext
    );

    await pageObject.verifyText(
      ObjectRepo.welcomescreen.firstScreen.desc,
      dataprovider.welcomeScreenPage.firstscreen.desc
    );

    await Utility.moveElement(925, 1424, 127, 1424);
  });

  it("Verifying the Second Screen and scrolling to next", async function() {
    await pageObject.verifyText(
      ObjectRepo.welcomescreen.secondScreen.accessibletext,
      dataprovider.welcomeScreenPage.secondscreen.accessibletext
    );

    await pageObject.verifyText(
      ObjectRepo.welcomescreen.secondScreen.desc,
      dataprovider.welcomeScreenPage.secondscreen.desc
    );

    await Utility.moveElement(925, 1424, 127, 1424);
  });

  it("Verifying the Thrid Screen and scrolling to next", async function() {
    await pageObject.verifyText(
      ObjectRepo.welcomescreen.thridScreen.accessibletext,
      dataprovider.welcomeScreenPage.thridscreen.accessibletext
    );

    await pageObject.verifyText(
      ObjectRepo.welcomescreen.thridScreen.desc,
      dataprovider.welcomeScreenPage.thridscreen.desc
    );

    await Utility.moveElement(925, 1424, 127, 1424);
  });
});
