const request = require("request");
const cheerio = require("cheerio");
const { parseCaseSummary, parseStatesSummary } = require("./helpers");

module.exports = (req, res) => {
  request("http://covid19.ncdc.gov.ng/", (error, response, html) => {
    let result = {};
    if (error) return error;
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      // sumary of cases in Nigeria
      let caseSummary = [];
      const NgCaseSummary = $("#custom1")
        .find($("tr"))
        .each(function(i, elem) {
          caseSummary[i] = $(this).text();
        });
      result.data = parseCaseSummary(caseSummary);

      // Handle cases by states
      let statesSummary = [];
      const NgCasesByState = $("#custom3")
        .find($("tr"))
        .each(function(i, elem) {
          statesSummary[i] = $(this).text();
        });
        
      result.data.states = parseStatesSummary(statesSummary);
      res.json(result);

    }
  });
}