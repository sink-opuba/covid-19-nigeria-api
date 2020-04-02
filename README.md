# covid-19-nigeria-api

A realtime api that reports covid-19 cases in nigeria by states. Sourced from [NCDC](http://covid19.ncdc.gov.ng/).

The API is live [here](https://covidnigeria.herokuapp.com)

Zero authentication required. A call to `https://covidnigeria.herokuapp.com` or `/api` returns a `json` string in this format:

```js
 {
   "data": {
     "totalConfirmedCases": number,
      "discharged": number,
      "death": number,
      "states" : [
        {
          "id": number,
          "AbujaFCT": number
        },
        {
          "id": number,
          "Abia": number
        },
        {
          "id": number,
          "Adamawa": number,
        },
        {
          "id": number,
         "AkwaIbom": number
        }
        ...
      ]
   }
 }
```
