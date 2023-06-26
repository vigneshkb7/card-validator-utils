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

module.exports = {
  isCreditCard,
  isEncryptedToken,
  detectCardType,
};
