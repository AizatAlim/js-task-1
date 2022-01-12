const SOUVENIR_WEIGHT = 75;
const TRINKET_WEIGHT= 112;

let souvenir = Number (prompt('Введите кол-во сувениров '));
let trinket  = Number (prompt('Введите кол-во безделушек'));

alert ('totalWeight:' + ( souvenir * SOUVENIR_WEIGHT +  trinket * TRINKET_WEIGHT ) / 1000 + 'g');

