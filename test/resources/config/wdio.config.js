const host = "0.0.0.0";
const port = 4723;
const platformName = "Android";
const appPackage = "com.boilerplate";
const appActivity = "com.boilerplate.MainActivity";
const platformVersion = "9";
const deviceName = "emulator-5554";
const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

exports.config = {
  host: host,
  port: port,

  maxInstances: 1,

  specs: [
    "./test/testcases/WelcomeScreen/StartScreen.js",
    "./test/testcases/Register/ValidRegister.js",
    "./test/testcases/Register/InvalidRegister.js"
  ],

  suites: {
    Register: [
      "./test/testcases/WelcomeScreen/StartScreen.js",
      "./test/testcases/Register/ValidRegister.js",
      "./test/testcases/Register/InvalidRegister.js"
    ],

    ForgotPassword: [
      "./test/testcases/ForgotPassword/InvalidForgotPassword.js"
    ],

    Login: [
      "./test/testcases/Login/ValidLogin.js",
      "./test/testcases/Login/InValidLogin.js"
    ]
  },

  capabilities: [
    {
      appiumVersion: "1.8.1", // Appium module version
      browserName: "", // browser name is empty for native apps
      platformName: platformName, // Platform on which it will be running
      appPackage: appPackage, // Package name of your app
      appActivity: appActivity, // App activity of the app
      platformVersion: platformVersion, // Android platform version of the device
      deviceName: deviceName, // device name of the mobile device
      waitforTimeout: waitforTimeout,
      commandTimeout: commandTimeout,
      isHeadless: true,
      newCommandTimeout: 30 * 60000
    }
  ],

  //sync: true,

  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,

  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true
      }
    ]
  ],

  afterTest: function(test) {
    if (test.error !== undefined) {
      browser.takeScreenshot();
    }
  },

  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000 // Default time to wait in ms before a test fails.
  },

  screenshotPath: "./errorShots/",

  services: ["appium"],
  appium: {
    waitStartTime: 6000,
    waitforTimeout: waitforTimeout,
    command: "appium",
    logFileName: "appium.log",
    args: {
      address: host,
      port: port,
      commandTimeout: commandTimeout,
      sessionOverride: true,
      debugLogSpacing: true
    }
  }
};