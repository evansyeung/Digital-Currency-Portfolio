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


$(document).ready(function () {
    $("#submit").on("click", function () {
        updatePorfolioShares();
    });
});

function updatePorfolioShares() {
    porfolioShares.length = 0;
    var inputList = $("input");
    for (var i = 0; i < inputList.length; i++) {
        porfolioShares.push(inputList[i].value);
    }
}
