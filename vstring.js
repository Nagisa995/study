function showVerticalMessage_v1(string) {
    let verticalString='';
    (string[0] === 'м') ? verticalString += `${string[0].toUpperCase()}\n`: verticalString += `${string[0]}\n`;
    (string.length > 10)? string = string.slice(1, 10):string=string.slice(1);
    for (let symbol of string) {
         verticalString += `${symbol}\n`;
    }
    console.log(verticalString);
}

showVerticalMessage_v1(`мирмидонец`);


function showVerticalMessage_v2(string) {
    for (let i = 0; i < string.length && i < 10; i++) {
        ((string[i] === 'м') && (i == 0)) ? console.log(string[i].toUpperCase()) : console.log(string[i]);
    }
}

showVerticalMessage_v2(`многоступенчатый`);