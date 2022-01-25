function Calc(action,number1,number2)
{
    const operations=
    {
        sum:number1+number2,
        sub:number1-number2,
        mult:number1*number2,
        div:number1/number2,
    };
    return (operations[action]);
}

console.log(Calc('sub',600,30));
console.log(Calc('sum',600,30));
console.log(Calc('mult',6,3));
console.log(Calc('div',60,3));