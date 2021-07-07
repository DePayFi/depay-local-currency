## Quickstart

```
yarn add depay-local-currency
```

or 

```
npm install --save depay-local-currency
```

```javascript
let currency = new Currency({ amount: 20 })
currency.toString()
// €22.32
```

## Functionalities

### new Currency

Creates an instance of Currency

```javascript
let currency = new Currency({ amount: 20 })
```

`amount` sets the amount you want to convert into a currency string.

`timeZone` will be automatically detected by the client, but can be provided to:

```javascript
let currency = new Currency({ amount: 20, timeZone: 'Europe/Berlin' })
```

### toString

Converts a currency string into a formatted string:

```javascript
let currency = new Currency({ amount: 20 })
currency.toString()
// €22.32
```

### fromUSD

Converts USD into local currency:

```javascript
let currency = await Currency.fromUSD({ amount: 20 })
currency.toString()
// €16.88
```

Requires you to configure your API key in order to convert currencies: https://depay.fi/documentation/api#fiat

```javascript
Currency.apiKey = "XYZ"
```

## Development

### Get started

```
yarn install
yarn start
```

### Release

```
npm publish
```