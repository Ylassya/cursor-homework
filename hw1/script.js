const ELECTRIC_SCOOTER = 15.678;
const LASER_PROJECTOR = 123.965;
const PLASMA_TV = 90.2345;

const maxPrice = Math.max(ELECTRIC_SCOOTER,LASER_PROJECTOR,PLASMA_TV);
console.log(maxPrice);

const minPrice = Math.min(ELECTRIC_SCOOTER,LASER_PROJECTOR,PLASMA_TV);
console.log(minPrice);

const sumPrice = ELECTRIC_SCOOTER + LASER_PROJECTOR + PLASMA_TV;
console.log(sumPrice);

const priceWithoutCoins = Math.trunc(ELECTRIC_SCOOTER) + Math.trunc(LASER_PROJECTOR) + Math.trunc(PLASMA_TV);
console.log(priceWithoutCoins);

const sumPriceRounded = Math.round(sumPrice / 100) * 100;
console.log(sumPriceRounded);

function evenOrOdd(priceWithoutCoins) {
    if(priceWithoutCoins%2==0)
        return true;
    else
        return false;
   }
console.log(evenOrOdd(priceWithoutCoins));

const CASH = 500;
const rest = CASH - sumPrice;
console.log(rest);

const arithmeticMean = Math.round((sumPrice/3)*100)/100;
console.log(arithmeticMean);

const sale = Math.round(Math.random() * 99) + 1;
console.log(sale + '%');

const priceWithSale = Math.round((sumPrice - sale)*100)/100;
console.log(priceWithSale);

const sellerPrice = Math.round((sumPrice/2)*100)/100;
console.log(sellerPrice);

const sellerProfit = Math.round((sellerPrice - sale)*100)/100;
console.log(sellerProfit);

const templateString = `Максимальна ціна: ${maxPrice};    
Мінімальна ціна: ${minPrice};
Вартість всіх товарів: ${sumPrice};
Сума всіх товарів без копійок: ${priceWithoutCoins};
Сума всіх товарів заокруглена до сотень: ${sumPriceRounded};
Чи парна сума всіх товарів без копійок: ${evenOrOdd(priceWithoutCoins)};
Решта з 500грн: ${rest};
Середнє арифметичне усіх цін: ${arithmeticMean};
Знижка Покупця:${sale + '%'};
Сума до сплати зі знижкою: ${priceWithSale};
Собівартість товарів: ${sellerPrice};
Чистий прибуток: ${sellerProfit};`
console.log(templateString);
