const electricScooter = 15.678;
const laserProjector = 123.965;
const plasmaTv = 90.2345;

const maxPriceGadgets = Math.max(electricScooter,laserProjector,plasmaTv);
console.log('maxPriceGadgets', maxPriceGadgets);

const minPriceGadgets = Math.min(electricScooter,laserProjector,plasmaTv);
console.log('minPriceGadgets', minPriceGadgets);

const sumPriceGadgets = electricScooter + laserProjector + plasmaTv;
console.log('sumPriceGadgets', sumPriceGadgets);

const priceWithoutCoins = Math.trunc(electricScooter) + Math.trunc(laserProjector) + Math.trunc(plasmaTv);
const roundingMin = Math.floor(priceWithoutCoins);
console.log('roundingMin', roundingMin);

const sumPriceRounded = Math.round(sumPriceGadgets / 100) * 100;
console.log('sumPriceRounded', sumPriceRounded);

const isEven = priceWithoutCoins % 2 === 0;
console.log('isEven', isEven);

const CASH = 500;
const rest = CASH - sumPriceGadgets;
console.log('rest', rest);

const arithmeticMean = Math.round((sumPriceGadgets/3)*100)/100;
console.log('arithmeticMean', arithmeticMean);

const sale = Math.round(Math.random() * 99) + 1;
console.log('sale', sale + '%');

const priceWithSale = Math.round((sumPriceGadgets / 100 * sale)*100)/100;
console.log('priceWithSale', priceWithSale);

const saleInMoney = Math.round((sumPriceGadgets - priceWithSale)*100)/100;

const sellerPrice = Math.round((sumPriceGadgets/2)*100)/100;
console.log('sellerPrice', sellerPrice);

const sellerProfit = Math.round((sellerPrice - saleInMoney)*100)/100;
console.log('sellerProfit', sellerProfit);

const templateString = `
  Максимальна ціна: ${maxPriceGadgets};    
  Мінімальна ціна: ${minPriceGadgets};
  Вартість всіх товарів: ${sumPriceGadgets};
  Сума всіх товарів без копійок: ${roundingMin};
  Сума всіх товарів заокруглена до сотень: ${sumPriceRounded};
  Чи парна сума всіх товарів без копійок: ${isEven};
  Решта з 500грн: ${rest};
  ереднє арифметичне усіх цін: ${arithmeticMean};
  Знижка Покупця:${sale + '%'};
  Сума до сплати зі знижкою: ${priceWithSale};
  Собівартість товарів: ${sellerPrice};
  Чистий прибуток: ${sellerProfit};
`
console.log(templateString);

document.writeln(templateString);

