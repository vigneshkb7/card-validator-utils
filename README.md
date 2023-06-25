# card-validator-utils

Library package util for payment industry

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
