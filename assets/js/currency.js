var currencyShort = [
  "BTC",
  "ETH",
  "XRP",
  "LTC",
  "XEM",
  "DASH",
  "ETC",
  "MIOTA",
  "XMR",
  "STRAT"
];

var porfolioShares = [];
var frontURL = "https://www.coincap.io/front";
var history24URL = "https://www.coincap.io/history/1day/";

$(document).ready(function () {
    $("#submit").on("click", function () {
        updatePorfolioShares();
        calculateROI();
    });
});

function updatePorfolioShares() {
    porfolioShares.length = 0;
    var inputList = $("input");
    for (var i = 0; i < inputList.length; i++) {
        porfolioShares.push(inputList[i].value);
    }
}

function calculateROI() {
    
}