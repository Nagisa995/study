function showVerticalMessage_v1(string) {
    (string.length < 11) ? string = string[0].toUpperCase() + string.slice(1) : string = string[0].toUpperCase() + string.slice(1, 10);
    for (let symbol of string) {
        console.log(symbol);
    }
}

showVerticalMessage_v1(`вертикальный`);
console.log(`\n`);


function showVerticalMessage_v2(string) {
    for (let i = 0; i < string.length && i < 10; i++) {
        (i == 0) ? console.log(string[i].toUpperCase()) : console.log(string[i]);
    }
}

showVerticalMessage_v2(`горизонтальный`);