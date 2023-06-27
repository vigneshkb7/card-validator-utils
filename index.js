// Node Engine v16.14.2

function isCreditCard(card) {
  if (card.length >= 15 && card.length <= 19) {
    return true;
  }
  return false;
}

function isEncryptedToken(token) {
  if (token.length === 44) {
    return true;
  }
  return false;
}

function detectCardType(cardNumber) {
  // Define regular expressions for different card types
  var visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
  var mastercardPattern = /^5[1-5][0-9]{14}$/;
  var amexPattern = /^3[47][0-9]{13}$/;
  var discoverPattern = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  var dinersClubPattern = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;

  // Match the card number against the regular expressions
  if (dinersClubPattern.test(cardNumber)) {
    return "diners club";
  } else if (visaPattern.test(cardNumber)) {
    return "visa";
  } else if (mastercardPattern.test(cardNumber)) {
    return "mastercard";
  } else if (amexPattern.test(cardNumber)) {
    return "american express";
  } else if (discoverPattern.test(cardNumber)) {
    return "discover";
  } else {
    return "invalid";
  }
}

function validateCreditCardNumber(cardNumber) {
  // Remove any spaces or dashes from the card number
  cardNumber = cardNumber.replace(/[^\d]/g, "");

  // Check if the card number is empty or not a number
  if (cardNumber === "" || isNaN(cardNumber)) {
    return false;
  }

  // Reverse the card number and convert it to an array
  var cardNumberArray = cardNumber.split("").reverse();

  // Apply the Luhn algorithm
  var sum = 0;
  for (var i = 0; i < cardNumberArray.length; i++) {
    var num = parseInt(cardNumberArray[i], 10);

    if (i % 2 === 1) {
      num *= 2;

      if (num > 9) {
        num -= 9;
      }
    }

    sum += num;
  }

  // The card number is valid if the sum is divisible by 10
  return sum % 10 === 0;
}

function validateCVVORCVCCode(securityCode) {
  // Remove any spaces or dashes from the security code
  securityCode = securityCode.replace(/[^\d]/g, "");

  // Check if the security code is empty or not a number
  if (securityCode === "" || isNaN(securityCode)) {
    return false;
  }

  // Check if the security code is 3 or 4 digits long
  var validLengths = [3, 4];
  if (!validLengths.includes(securityCode.length)) {
    return false;
  }

  // The security code is valid
  return true;
}

module.exports = {
  isCreditCard,
  isEncryptedToken,
  detectCardType,
  validateCreditCardNumber,
  validateCVVORCVCCode,
};
