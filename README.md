# covid-19-nigeria-api

A realtime api that reports covid-19 cases in nigeria by states. Sourced from [NCDC](http://covid19.ncdc.gov.ng/).

The API is live [here](https://covidnigeria.herokuapp.com/)

Zero authentication required. A call to `https://covidnigeria.herokuapp.com/` or `/api` returns a `json` string in this format:

```js
 {
   "data": {
     "totalSamplesTested": "> 5000",
      "totalConfirmedCases": 276,
      "discharged": 44,
      "death": 6,
      "states" : [
        {
                "Lagos": {
                    "_id": uniqueID,
                    "confirmedCases": number,
                    "casesOnAdmission": number,
                    "discharged": number,
                    "death": number
                }
            },
            {
                "AbujaFCT": {
                    "_id": uniqueID,
                    "confirmedCases": number,
                    "casesOnAdmission": number,
                    "discharged": number,
                    "death": number
                }
            },
            
         ...
      ]
   }
 }
```
