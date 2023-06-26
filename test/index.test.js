const { isCreditCard, isEncryptedToken, detectCardType } = require("../index");

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

describe("Testing Token Number Functionality", () => {
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

describe("Testing Card Type", () => {
  test("should return correct cart type", () => {
    expect(detectCardType("4532015112890368")).toBe("visa");
    expect(detectCardType("5555555555554444")).toBe("mastercard");
    expect(detectCardType("378282246310005")).toBe("american express");
    expect(detectCardType("6011111111111117")).toBe("discover");
    expect(detectCardType("6011601160116611")).toBe("discover");
    expect(detectCardType("6011000990139424")).toBe("discover");
    expect(detectCardType("30569309025904")).toBe("diners club");
  });
  test("should return invalid", () => {
    expect(detectCardType("45320112890368")).toBe("invalid");
  });
});
