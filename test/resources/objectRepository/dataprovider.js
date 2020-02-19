/**
 *
 * @@@@@@@@@@@@@@@@@ DATA CENTER @@@@@@@@@@@@@@@
 *
 * All the Data which need to be verified or entered in the application are been added
 * They are sepreated based on Pages ---> VALID and INVALID
 *
 */

exports.welcomeScreenPage = {
  firstscreen: {
    accessibletext: "Accessible Anywhere",
    desc: "Signup with your abdroid smartphone anytime even outside Tanzania"
  },
  secondscreen: {
    accessibletext: "Secure payment platform",
    desc:
      "Priority shipping, trackyour stuff for. No hidden fees or extra fees "
  },
  thridscreen: {
    accessibletext: "Instant Payments",
    desc: "Adding your bank account details in Securely and easily"
  }
};

exports.Register = {
  valid: {
    creatAccountText: "Create Account",
    fullName: "Ajinkya",
    phoneNumber: "9967903705",
    password: "123456",
    confirmPassword: "123456",
    checkBoxText: "I agree to the Terms and Conditions"
  },

  InValid: {
    creatAccountText: "Create Account",
    fullName: "Ajinkya",
    phoneNumber: "9967903705",
    password: "123456",
    confirmPassword: "123456",
    checkBoxText: "I agree to the Terms and Condition"
  }
};

exports.Login = {
  Valid: {
    logintoContinuetext: "Log in to Continue",

    phoneNumber: 919191919,
    password: 1232213,

    afterLogin: "Payment Details"
  },

  InValid: {
    logintoContinuetext: "Log in to Continue",

    phoneNumber: 919191919,
    password: 1232213,

    afterLogin: "Payment Details"
  }
};

exports.ForgotPassword = {
  InValid: {
    forgotPasswordText: "Forgot your Password?",
    verifyForgotPassword:
      "Let's enter your mobile number to reset your password",
      
  },

  Valid: {}
};
