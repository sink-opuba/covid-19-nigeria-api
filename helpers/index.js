const getIndexOfFirstDigit = str => str.search(/\d/);

exports.parseCaseSummary = caseSummary => {
  caseSummary = caseSummary.map(elem => {
    // remove line breaks and whitespaces
    elem = elem.replace(/\n|\s/g, "").trim();
    const index = getIndexOfFirstDigit(elem);
    return +elem.substring(index);
  });

  return {
    totalConfirmedCases: caseSummary[0],
    discharged: caseSummary[1],
    death: caseSummary[2]
  };
};

exports.parseStatesSummary = statesSummary => {
  statesSummary.shift();
  const states = [];
  let id = 0;
  statesSummary = statesSummary.forEach(elem => {
    // remove line breaks and whitespaces
    elem = elem.replace(/\n|\s/g, "").trim();
    // 'Adamawa0AkwaIbom0'.search(/[0-9]\D/) =  returns index 7
    const divider = elem.search(/[0-9]\D/) + 1;
    const part1 = elem.substring(0, divider); // e.g Adamawaa0
    const part2 = elem.substring(divider); // AkwaIbom0
    if (part1) {
      const index = getIndexOfFirstDigit(part1);
      id = id + 1;
      states.push({ id: id, [part1.slice(0, index)]: +part1.slice(index) });
    }
    if (part2) {
      const index = getIndexOfFirstDigit(part2);
      id = id + 1;
      states.push({ id: id, [part2.slice(0, index)]: +part2.slice(index) });
    }
  });
  return states;
};
