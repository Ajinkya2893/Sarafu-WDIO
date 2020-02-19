class getCustomfunctions {
  /**
   *
   * @param {ObjectRepository} element
   * Accepts element from the Repository and return the Value
   */
  async getText(element) {
    try {
      if (this.isDisplayed)
        return await (await $(`android=${element}`)).getText();
      else {
        console.log(
          "============Element is not displayed to the user============"
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *
   * @param {X1 axis} x1
   * @param {Y1 axis} y1
   * @param {X2 axis} x2
   * @param {Y2 axis} y2
   *
   * Taking both the swipe co-ordinates from x1&y1 too x2y2
   */
  async moveElement(x1, y1, x2, y2) {
    try {
      await browser.touchAction([
        { action: "press", x: x1, y: y1 },
        { action: "moveTo", x: x2, y: y2 },
        "release"
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *
   * @param {ObjectRepository } element
   * @param {Data provider} data
   *
   * Accepts two parameter one the object to fetch and second what to write
   */
  async writeText(element, data) {
    if (this.isFocused(element)) {
      //Using a hard code value to fetch the edit object as its dynamic
      await (
        await (await $(`android=${element}`)).$(
          `android=${'new UiSelector().index(0).className("android.widget.EditText")'}`
        )
      ).setValue(data);
    } else {
      console.log(
        "============Element is not Focused when trying to access============"
      );
    }
  }

  async isFocused(element) {
    try {
      return await (await $(`android=${element}`)).isFocused();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *
   * @param {ObjectRepository} element
   *
   * Needs one parameter from the Object Repositiory
   */
  async clickOn(element) {
    try {
      await (await $(`android=${element}`)).click();
    } catch (error) {
      console.error(error);
    }
  }

  async isDisplayed(element) {
    try {
      if (this.waitForDisplayed(element)) {
        return await (await $(`android=${element}`)).isDisplayed();
      } else {
        console.log(
          "============Element is not displayed to the user============"
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  async waitForDisplayed(element) {
    try {
      await (await $(`android=${element}`)).waitForDisplayed(3000);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new getCustomfunctions();
