# card-validator-utils

Library package util for payment industry

Key features and benefits of the "card-validator-utils" package may include:

Credit Card Validation: The package offers functions to validate credit card numbers, ensuring they follow the correct format and meet specific criteria.

Card Type Detection: It provides functionality to detect the type of credit card based on the card number, such as Visa, Mastercard, American Express, Diners Club etc.

Checksum Verification: The package includes algorithms to perform checksum verification on credit card numbers, ensuring the validity of the entered digits.

Expiration Date Validation: It offers functions to validate the expiration date of credit cards, checking if the date is in the future and adheres to the expected format.

Security Code (CVV/CVC) Validation: The package provides utilities to validate the security code (CVV/CVC) of credit cards, verifying the number of digits and ensuring it meets the expected format.

Luhn Algorithm Implementation: The Luhn algorithm, a common method for credit card validation, is implemented within the package to validate the correctness of credit card numbers.

## installation

```
npm i card-validator-utils
```

## usage

`isCreditCard` function return boolean

```
const { isCreditCard } = require("card-validator-utils");

isCreditCard('4242424242424242')

```

`isEncryptedToken` function returns boolean based 44 digit input

44 digit is encrypted version of card number

```
const { isEncryptedToken } = require("card-validator-utils");

isEncryptedToken('42424242F242R24242424242F24242424242424C424X')

```

`detectCardType` function to detect card type

currently it supports

1. diners club
2. visa
3. mastercard
4. american express
5. discover

```


const { detectCardType } = require("card-validator-utils");

var cardType = detectCardType(cardNumber);
console.log(cardType);  // Output: diners club

```


`validateCreditCardNumber` function to test valid card number

```
const { validateCreditCardNumber } = require("card-validator-utils");

validateCreditCardNumber("4242424242424242") // returns boolean

```
![Alt](https://repobeats.axiom.co/api/embed/dd36319fddc491ec42260b34789b3ab42a1645a8.svg "Repobeats analytics image")

