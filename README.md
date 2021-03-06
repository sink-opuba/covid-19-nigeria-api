# covid-19-nigeria-api

A realtime api that reports covid-19 cases in nigeria by states. Sourced from [NCDC](http://covid19.ncdc.gov.ng/).

The API is live [here](https://covidnigeria.herokuapp.com/)

Zero authentication required. A call to `https://covidnigeria.herokuapp.com/` or `/api` returns a `json` string in this format:

```js
 {
   "data": {
     "totalSamplesTested": string,
      "totalConfirmedCases": number,
      "totalActiveCases": number,
      "discharged": number,
      "death": number,
      "states" : [
        { 
          "state": "Lagos",
          "_id": uniqueID,
          "confirmedCases": number,
          "casesOnAdmission": number,
          "discharged": number,
          "death": number
        },
         { 
          "state": "FCT",
          "_id": uniqueID,
          "confirmedCases": number,
          "casesOnAdmission": number,
          "discharged": number,
          "death": number
        },
         ...
      ]
   }
 }
```
To get data for a specific state, map through the returned states array and grab your state of choice. 
See this codepen example using JavaScript fetch [here](https://codepen.io/sinkopuba/pen/VwaBWBJ)