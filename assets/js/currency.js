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

function getCurrentPrice(short, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].short === short) {
            return list[i].price;
        }
    }
    return -1;
}

function calculateROI() {
    var initialInvestment = 0;
    var currInvestmentTotal = 0;
    var overallROI = 0;

    $.getJSON(frontURL, function (currData) {
        for (var i = 0; i < porfolioShares.length; i++) {
            if (porfolioShares[i] > 0) {
                (function (i) {
                    $.ajax({
                        url: history24URL + currencyShort[i],
                        dataType: "json",
                        async: false,
                        success: function (histData) {
                            var currPrice = getCurrentPrice(currencyShort[i], currData);
                            initialInvestment += histData.price[0][1] * porfolioShares[i];
                            currInvestmentTotal += currPrice * porfolioShares[i];
                        }
                    });
                })(i);
            }
        }

        var overallROI = (currInvestmentTotal - initialInvestment) / initialInvestment * 100;
        $("#percentage").html(Math.round(overallROI * 100) / 100 + "%");
        if (overallROI > 0) {
            $("#percentage").css("color", "green");
        } else {
            $("#percentage").css("color", "red");
        }
    });
}
