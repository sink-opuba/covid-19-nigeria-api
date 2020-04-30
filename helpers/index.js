const shortid = require("shortid");

const getIndexOfFirstDigit = (str) => str.search(/\d/);

exports.parseCaseSummary = (caseSummary) => {
  caseSummary = caseSummary.map((elem) => {
    // remove line breaks, commas, and whitespaces
    elem = elem.replace(/\n|\s|\,/g, "").trim();
    const index = getIndexOfFirstDigit(elem);
    return +elem.substring(index);
  });
  return {
    totalSamplesTested: `> ${caseSummary[0]}`,
    totalConfirmedCases: caseSummary[1],
    discharged: caseSummary[2],
    death: caseSummary[3],
  };
};

exports.parseStatesSummary = (statesSummary) => {
  let stateData = [...statesSummary];
  stateData.shift();
  stateData.pop();
  stateData = stateData
    .map((elem) => {
      elem = elem
        //removes newline breaks, space between words, and split into array from more than one space
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
    })
    // remove empty data
    .filter((data) => data.state !== "");
  return stateData;
};
