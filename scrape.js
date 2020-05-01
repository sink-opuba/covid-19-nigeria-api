const request = require("request");
const cheerio = require("cheerio");
const { parseCaseSummary, parseStatesSummary } = require("./helpers");

module.exports = (req, res) => {
  request("http://covid19.ncdc.gov.ng/", (error, response, html) => {
    let result = {};
    if (error) return error;
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const caseSummary = [];
      const totalSamplesTested = $(
        ".pcoded-content .page-block .row > div:last-child span"
      ).text();

      const dataInfo = $(".pcoded-content .page-header div:nth-child(2)")
        .find($(".card-body span"))
        .each(function (i, elem) {
          caseSummary[i] = $(this).text();
        });

      // formate returned data
      result.data = parseCaseSummary(
        totalSamplesTested,
        caseSummary.slice(0, 4)
      );

      // Handle cases by states
      const statesSummary = [];
      const NgCasesByState = $("#custom1")
        .find($("tr"))
        .each(function (i, elem) {
          statesSummary[i] = $(this).text();
        });

      // console.log(parseStatesSummary(statesSummary));
      result.data.states = parseStatesSummary(statesSummary);
      res.json(result);
    }
  });
};
