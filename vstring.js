function showVerticalMessage_v1(string) {
    let verticalString = '';
    if (string.length > 10) string = string.slice(0, 10);
    for (let symbol of string) {
        ((symbol === 'м') && (string.indexOf(symbol) === 0)) ? verticalString += `${symbol.toUpperCase()}\n` : verticalString += `${symbol}\n`;
    }
    console.log(verticalString);
}

showVerticalMessage_v1(`многоножка`);


function showVerticalMessage_v2(string) {
    for (let i = 0; i < string.length && i < 10; i++) {
        ((string[i] === 'м') && (i == 0)) ? console.log(string[i].toUpperCase()) : console.log(string[i]);
    }
}

showVerticalMessage_v2(`многоступенчатый`);