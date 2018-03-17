//
// let boilerPlateMarket =
// {
//     marketName: '',
//     URL: '', //URL To Fetch API From.
//     toBTCURL: false, //URL, if needed for an external bitcoin price api.
//     last: function (data, coin_prices) { //Get the last price of coins in JSON data
//         return new Promise(function (res, rej) {
//             try {
//                 for (x in / of data) {
//                     price = ...;
//                     coin_prices[coinName][marketName] = price;
//                 }
//                 res(coin_prices);
//             }
//             catch (err) {
//                 rej(err);
//             }
//
//         })
//     },
//
//
// }

let markets = [

    // {
    //     marketName: 'cryptowatchAPI',
    //     URL: 'https://api.cryptowat.ch/markets/summaries', //URL To Fetch API From.
    //     toBTCURL: false, //URL, if needed for an external bitcoin price api.
    
    //     last: function (data, coin_prices, toBTCURL) { //Where to find the last price of coin in JSON data
    //         return new Promise(function (res, rej) {
    //             try {
    //                 data = data.result;
    //                 for (let key in data) {
    //                     let marketPair = key.split(':');
    //                     let market = marketPair[0], pair = marketPair[1];
    //                     let indexOfBTC = pair.indexOf('btc');
    //                     if (indexOfBTC > 0 && !pair.includes('future') && !market.includes('qryptos') && !market.includes('quoine') && !market.includes('poloniex')) {
    //                         if(marketNames.indexOf(market) === -1 ){
    //                             marketNames.push([[market], ['']]);
    //                             console.log(marketNames);
    //                         }
    //                         let coin = pair.replace(/btc/i, '').toUpperCase();
    //                         let price = data[key].price.last;
    //                         if(price > 0) {
    //                             if (!coin_prices[coin]) coin_prices[coin] = {};
    //                             coin_prices[coin][market] = price;
    
    //                         }
    //                     }
    //                 }
    //                 res(coin_prices);
    //             }
    //             catch (err) {
    //                 console.log(err);
    //                 rej(err)
    //             }
    //         })
    //     }
    
    // },
    // {
    //     marketName: 'bittrex',
    //     URL: 'https://bittrex.com/api/v1.1/public/getmarketsummaries',
    //     toBTCURL: false,
    //     pairURL : '',
    //     last: function (data, coin_prices) { //Where to find the last price of coin in JSON data
    //         return new Promise(function (res, rej) {
    //             try {
    //                 for (let obj of data.result) {
    //                     if(obj["MarketName"].includes('BTC-')) {
    //                         let coinName = obj["MarketName"].replace("BTC-", '');
    //                         if (!coin_prices[coinName]) coin_prices[coinName] = {};
    //                         coin_prices[coinName].bittrex = obj.Last;
    //                     }
    //                 }
    //                 res(coin_prices);
    //             }
    //             catch (err) {
    //                 console.log(err);
    //                 rej(err);
    //             }
    //
    //         })
    //     },
    //
    // },
        {
        marketName: 'kucoin',
        URL: 'https://api.kucoin.com/v1/open/tick/',
        toBTCURL: false,
        pairURL : '',
        last: function (data, coin_prices) { //Where to find the last price of coin in JSON data
            return new Promise(function (res, rej) {
                try {
                    for (let obj of data.data) {
                        if(obj["symbol"].includes('-BTC')) {
                            let coinName = obj["symbol"].replace("-BTC", '');
                            if (!coin_prices[coinName]) coin_prices[coinName] = {};
                            coin_prices[coinName].kucoin = obj.buy;
                        }
                    }
                    res(coin_prices);
                }
                catch (err) {
                    console.log(err);
                    rej(err);
                }

            })
        },

    },
    // {
    //     marketName: 'gateio',
    //     URL: 'http://data.gate.io/api2/1/marketlist/',
    //     toBTCURL: false,
    //     pairURL : '',
    //     last: function (data, coin_prices) { //Where to find the last price of coin in JSON data
    //         return new Promise(function (res, rej) {
    //             try {
    //                 for (let obj of data.data) {
    //                     if(obj["pair"].includes('_btc')) {
    //                         let coinName = obj["pair"].replace("_btc", '').toUpperCase();
    //                         if (!coin_prices[coinName]) coin_prices[coinName] = {};
    //                         coin_prices[coinName].gateio = obj.rate;
    //                     }
    //                 }
    //                 res(coin_prices);
    //             }
    //             catch (err) {
    //                 console.log(err);
    //                 rej(err);
    //             }
    //
    //         })
    //     },
    //
    // },
       
    {
         marketName: 'binance',
         URL: 'https://api.binance.com/api/v3/ticker/price',
         toBTCURL: false,
         pairURL: '',
         last: function (data, coin_prices) { //Where to find the last price of coin in JSON data
             return new Promise(function (res, rej) {
                 try {
                     console.log(data);
                     for (let obj of data) {
                         if (obj["symbol"].includes('BTC')) {
                             let coinName = obj["symbol"].replace("BTC", '');
                             if (!coin_prices[coinName]) coin_prices[coinName] = {};
                             coin_prices[coinName].binance = obj.price;
                         }
                     }
                     res(coin_prices);
                 }
                 catch (err) {
                     console.log(err);
                     rej(err);
                 }
 
             })
         },
     },

    
    // {
		// marketName: 'cryptopia',
		// URL: 'https://www.cryptopia.co.nz/api/GetMarkets/BTC', //URL To Fetch API From.
		// toBTCURL: false, //URL, if needed for an external bitcoin price api.
    //     pairURL : '',
    //     last: function (data, coin_prices) { //Get the last price of coins in JSON data
		// 	return new Promise(function (res, rej) {
		// 		try {
		// 			for (let obj of data.Data) {
		// 				if(obj["Label"].includes('/BTC')) {
		// 					let coinName = obj["Label"].replace("/BTC", '');
		// 					if (!coin_prices[coinName]) coin_prices[coinName] = {};
		// 					coin_prices[coinName].cryptopia = obj.LastPrice;
    //                     }
    //                 }
    //                 res(coin_prices);
		//
    //             }
    //             catch (err) {
    //                 console.log(err);
    //                 rej(err);
    //             }
    //
    //         })
		// },
    // },
    //
    // {
		// marketName: 'bleutrade',
		// URL: 'https://bleutrade.com/api/v2/public/getmarketsummaries', //URL To Fetch API From.
		// toBTCURL: false, //URL, if needed for an external bitcoin price api.
    //     pairURL : '',
    //     last: function (data, coin_prices) { //Get the last price of coins in JSON data
		// 	return new Promise(function (res, rej) {
		// 		try {
		// 			for (let obj of data.result) {
		// 				if(obj["MarketName"].includes('_BTC')) {
		// 					let coinName = obj["MarketName"].replace("_BTC", '');
		// 					if (!coin_prices[coinName]) coin_prices[coinName] = {};
		// 					coin_prices[coinName].bleutrade = obj.Last;
    //                     }
    //                 }
    //                 res(coin_prices);
		//
    //             }
    //             catch (err) {
    //                 console.log(err);
    //                 rej(err);
    //             }
    //
    //         })
		// },
    // },
    //
    // {
    //
    //     marketName: 'kraken', // kraken has no one size fits all market summery so each pair has to be entered as param in GET - will need to add new coins as they are added to exchange
    //     URL: 'https://api.kraken.com/0/public/Ticker?pair=DASHXBT,EOSXBT,GNOXBT,ETCXBT,ETHXBT,ICNXBT,LTCXBT,MLNXBT,REPXBT,XDGXBT,XLMXBT,XMRXBT,XRPXBT,ZECXBT', //URL To Fetch API From.
    //     toBTCURL: false, //URL, if needed for an external bitcoin price api.
    //     pairURL : '',
    //     last: function (data, coin_prices) { //Get the last price of coins in JSON data
    //         return new Promise(function (res, rej) {
    //             try {
    //                 for (let key in data.result) {
    //                     let arr = key.match(/DASH|EOS|GNO|ETC|ETH|ICN|LTC|MLN|REP|XDG|XLM|XMR|XRP|ZEC/); // matching real names to weird kraken api coin pairs like "XETCXXBT" etc
    //                     let name = key;
    //                     let matchedName = arr[0];
    //                     if (matchedName === "XDG") { //kraken calls DOGE "XDG" for whatever reason
    //                         let matchedName = "DOGE";
    //                         var coinName = matchedName;
    //                     } else {
    //                         var coinName = matchedName;
    //                     }
    //
    //                     if (!coin_prices[coinName]) coin_prices[coinName] = {};
    //
    //                     coin_prices[coinName].kraken = data.result[name].c[0];
    //
    //                 }
    //                 res(coin_prices);
    //
    //             }
    //             catch (err) {
    //                 console.log(err);
    //                 rej(err);
    //             }
    //
    //         })
    //     },
    // },

];

let marketNames = [];
for(let i = 0; i < markets.length; i++) { // Loop except cryptowatch
    marketNames.push([[markets[i].marketName], [markets[i].pairURL]]);
}
console.log("Markets:", marketNames);
module.exports = function () {
    this.markets = markets;
    this.marketNames = marketNames;
};
