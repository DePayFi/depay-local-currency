import timezoneToCurrency from '../../src/timezoneToCurrency'
import { Currency } from 'dist/cjs/index.js'

describe('Currency', () => {

  it('provides current timezone', async ()=> {
    expect(Currency.timeZone()).toBeDefined()
  })

  it('sets user time zone if not provided', async ()=> {
    expect(
      (new Currency({ amount: 1 })).timeZone
    ).toEqual(Intl.DateTimeFormat().resolvedOptions().timeZone)
  })

  it('sets given time zone', async ()=> {
    expect(
      (new Currency({ amount: 1, timeZone: 'Pacific/Rarotonga' })).timeZone
    ).toEqual('Pacific/Rarotonga')
  })

  it('provides currency code based on timeZone', async ()=> {
    expect(
      (new Currency({ amount: 1, timeZone: 'Pacific/Rarotonga' })).code
    ).toEqual('NZD')
    expect(
      (new Currency({ amount: 1, timeZone: 'Europe/Berlin' })).code
    ).toEqual('EUR')
    expect(
      (new Currency({ amount: 1, timeZone: 'Europe/Zurich' })).code
    ).toEqual('CHF')
  })

  it('falls back to USD if timezone to currency is unknown', async ()=> {
    expect(
      (new Currency({ amount: 1, timeZone: 'Pacific/Unknown' })).code
    ).toEqual('USD')
  })

  it('converts currency to string', async ()=> {
    expect(
      (new Currency({ amount: 22.321, timeZone: 'Europe/Berlin' })).toString()
    ).toEqual('€22.32')
    expect(
      (new Currency({ amount: 22.325, timeZone: 'Europe/Zurich' })).toString()
    ).toEqual('CHF 22.33')
    expect(
      (new Currency({ amount: 12322.21, timeZone: 'Europe/Kaliningrad' })).toString()
    ).toEqual('RUB 12,322.21')
  })

  it('converts all known timezones to a currency string without error', async ()=> {
    Object.keys(timezoneToCurrency).forEach((key)=>{
      let currency = new Currency({ amount: 1, timeZone: key })
      currency.toString()
    })
  })

  it('allows to configure the apiKey for conversion', async ()=> {
    Currency.apiKey = 'AWZ'
    expect(Currency.apiKey).toEqual('AWZ')
  })

  describe('fetch currency rate', ()=>{

    beforeEach(()=>{
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ usd: '5.32' })
        })
      );
    })

    it('converts currency via API', async ()=> {
      Currency.apiKey = 'AWZ'
      let currency = await Currency.fromUSD({ amount: 20, timeZone: 'Europe/Berlin' })
      expect(currency.toString()).toEqual('€106.40')
    })
  })
});