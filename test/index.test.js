const { isCreditCard, isEncryptedToken } = require("../index");

describe("Testing credit card Functionality", () => {
  test("should return true for valida cards", () => {
    expect(isCreditCard("4242424242424242")).toBe(true);
    expect(isCreditCard("6842424242424242")).toBe(true);
  });
  test("should return false for invalid cards", () => {
    expect(isCreditCard("42424242424242")).toBe(false);
    expect(isCreditCard("")).toBe(false);
    expect(isCreditCard(48736)).toBe(false);
  });
});

describe("Testing credit card Functionality", () => {
  test("should return true for valid tokens", () => {
    expect(
      isEncryptedToken("42424242F242R24242424242F24242424242424C424X")
    ).toBe(true);
  });
  test("should return false for invalid token", () => {
    expect(isEncryptedToken("42424242F242R24242424242F424242424C424X")).toBe(
      false
    );
  });
});
