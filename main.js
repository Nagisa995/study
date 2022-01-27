function Calc(action,number1,number2)
{
    const operations=
    {
        sum:number1+(+number2),
        sub:number1-number2,
        mult:number1*number2,
        div:number1/number2,
    };
    if((action in operations)&&(+number1||number1=='0')&&(+number2||number2=='0')) return(operations[action]);
    else    return (action in operations? 'Error':'unknown operation');    
}

console.log(Calc('sub',600,30));
console.log(Calc('sum',600,'30'));
console.log(Calc('mult',6,3));
console.log(Calc('div',60,3));
console.log(Calc('awdqv',6,3));
console.log(Calc('mult',6,''));