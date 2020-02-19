/**
 * 
 * @@@@@@@@@@@@@@@@@ OBJECT REPOSITORY @@@@@@@@@@@@@@@
 * 
 * All the xpath and values are added based on the page and sepreated using the json node
 * 
 */

exports.welcomescreen = {
  firstScreen: {
    accessibletext:
      'new UiSelector().text("Accessible Anywhere").className("android.widget.TextView")',
    desc: 'new UiSelector().index(2).className("android.widget.TextView")'
  },
  secondScreen: {
    accessibletext:
      'new UiSelector().text("Secure payment platform").className("android.widget.TextView")',
    desc: 'new UiSelector().index(2).className("android.widget.TextView")'
  },
  thridScreen: {
    accessibletext:
      'new UiSelector().text("Instant Payments").className("android.widget.TextView")',
    desc: 'new UiSelector().index(2).className("android.widget.TextView")'
  },
  //Buttons
  RegisterButton:
    'new UiSelector().text("REGISTER NOW").className("android.widget.TextView")',
  LoginButton:
    'new UiSelector().text("LOGIN").className("android.widget.TextView")'
};

exports.Register = {
  createRetailerText:
    'new UiSelector().text("Create Account").className("android.widget.TextView")',

  fullName: 'new UiSelector().index(1).className("android.view.ViewGroup")',
  phoneNumber: 'new UiSelector().index(3).className("android.view.ViewGroup")',
  currentPassword:
    'new UiSelector().index(4).className("android.view.ViewGroup")',
  confirmPassword:
    'new UiSelector().index(6).className("android.view.ViewGroup")',
  typeOfMerchant:
    'new UiSelector().text("Type of Merchant").className("android.widget.TextView")',
  optionOfMerchant:
    'new UiSelector().text("I am a Distributer").className("android.widget.TextView")',
  iAgreeCheckbox:
    'new UiSelector().index(9).className("android.view.ViewGroup")',
  iAgreeTextBoxSection:
    'new UiSelector().text("I agree to the Terms and Conditions").className("android.widget.TextView")',
  CreateRegisterButton:
    'new UiSelector().text("REGISTER").className("android.widget.TextView")',
  SkipToBrowse:
    'new UiSelector().text("Skip to Browse").className("android.widget.TextView")'
};

exports.Login = {
  loginContinueText:
    'new UiSelector().text("Log in to Continue").className("android.widget.TextView")',
  phoneNumber: 'new UiSelector().index(2).className("android.view.ViewGroup")',
  password: 'new UiSelector().index(3).className("android.view.ViewGroup")',

  forgotPassword:
    'new UiSelector().text("Forgot Password").className("android.widget.TextView")',

  loginButton:
    'new UiSelector().text("LOG IN").className("android.widget.TextView")',

  skipToWelcome:
    'new UiSelector().text("LOG IN").className("android.widget.TextView")',

  afterLogin:
    'new UiSelector().text("Payment Details").className("android.widget.TextView")',

  skipLogin: ""
};

exports.ForgotPassword = {
  forgotpasswordPageText:
    'new UiSelector().text("Forgot your Password?").className("android.widget.TextView")',
  verifyForgotPassword:
    'new UiSelector().text("Let\'s enter your mobile number to reset your password").className("android.widget.TextView")'
};
  