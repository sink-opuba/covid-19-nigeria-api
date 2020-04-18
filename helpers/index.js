const shortid = require("shortid");

const getIndexOfFirstDigit = (str) => str.search(/\d/);

exports.parseCaseSummary = (caseSummary) => {
  caseSummary = caseSummary.map((elem) => {
    // remove line breaks and whitespaces
    elem = elem.replace(/\n|\s/g, "").trim();
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

// exports.parseStatesSummary = statesSummary => {
//   statesSummary.shift();
//   const states = [];
//   let id = 0;
//   statesSummary = statesSummary.forEach(elem => {
//     // remove line breaks and whitespaces
//     elem = elem.replace(/\n|\s/g, "").trim();
//     // 'Adamawa0AkwaIbom0'.search(/[0-9]\D/) =  returns index 7
//     const divider = elem.search(/[0-9]\D/) + 1;
//     const part1 = elem.substring(0, divider); // e.g Adamawaa0
//     const part2 = elem.substring(divider); // AkwaIbom0
//     if (part1) {
//       const index = getIndexOfFirstDigit(part1);
//       id = id + 1;
//       states.push({ id: id, [part1.slice(0, index)]: +part1.slice(index) });
//     }
//     if (part2) {
//       const index = getIndexOfFirstDigit(part2);
//       id = id + 1;
//       states.push({ id: id, [part2.slice(0, index)]: +part2.slice(index) });
//     }
//   });
//   return states;
// };

//  TEST VERSION

exports.parseStatesSummary = (statesSummary) => {
  statesSummary.shift();
  statesSummary.pop();
  statesSummary = statesSummary.map((elem) => {
    // removes newline breaks, multiple whitespaces and space between words
    elem = elem
      .replace(/\n/g, "")
      .replace(/[ ]{1,}/g, " ")
      .replace(/([a-zA-Z])\s([a-zA-Z])/, "$1$2")
      .trim()
      .split(" "); // =>  ['Bauchi', '8', '5', '0', '0']
    const state = {
      state: elem[0],
      _id: shortid.generate(), //generates unique ID
      confirmedCases: +elem[1],
      casesOnAdmission: +elem[2],
      discharged: +elem[3],
      death: +elem[4],
    };
    return state;
  });

  return statesSummary;
};
