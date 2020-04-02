# covid-19-nigeria-api
A realtime api that reports covid-19 cases in nigeria by states. Sourced from [NCDC](http://covid19.ncdc.gov.ng/).

The API is live [here](https://covidnigeria.herokuapp.com)

Zero authentication required. A call to `https://covidnigeria.herokuapp.com` returns a `json` object in this format: 

```js
 [
  {
    "totalConfirmedCases": number,
    "discharged": number,
    "death": number
  },
  {
    "states": {
      "AbujaFCT": number,
      "Abia": number,
      "Adamawa": number,
      "AkwaIbom": number,
      "Benue": number,
      "CrossRiver": number,     
    }
  }
]
```
