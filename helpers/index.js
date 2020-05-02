const shortid = require("shortid");
const removeComma = (str) => str.replace(",", "");

exports.parseCaseSummary = (totalSamplesTested, caseSummary) => {
  totalSamplesTested = removeComma(totalSamplesTested);
  caseSummary = caseSummary.map((str) => removeComma(str));
  return {
    totalSamplesTested,
    totalConfirmedCases: +caseSummary[0],
    totalActiveCases: +caseSummary[1],
    discharged: +caseSummary[2],
    death: +caseSummary[3],
  };
};

exports.parseStatesSummary = (statesSummary) => {
  let stateData = [...statesSummary];
  stateData.shift();
  stateData.pop();
  stateData = stateData.map((elem) => {
    elem = removeComma(elem)
      //removes newline or comma breaks, space between words, and split into array from more than one space
      .replace(/\n/g, " ")
      .replace(/([a-zA-Z])\s([a-zA-Z])/, "$1$2")
      .trim()
      .split(/[ ]{1,}/); // =>  ['Bauchi', '8', '5', '0', '0']
    return {
      state: elem[0],
      _id: shortid.generate(), //generates unique ID
      confirmedCases: +elem[1],
      casesOnAdmission: +elem[2],
      discharged: +elem[3],
      death: +elem[4],
    };
  });
  return stateData;
};
