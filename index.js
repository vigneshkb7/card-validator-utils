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

module.exports = {
  isCreditCard,
  isEncryptedToken,
};
