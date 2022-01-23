function failnumber(a)
{
if (+a||a=='0')
return (+a);
else    
{
    alert ('Error');
    return (a='false');
}
}
function sum(a,b)
{return (a+b)}
function differ(a,b)
{return (a-b)}
function multi(a,b)
{return (a*b)}
function division(a,b)
{return (a/b)}
function degree(a,b)
{return (a**b)}
{
let numb1,operator, numb2;
do
{
numb1=failnumber(numb1=prompt('Введите первое число'));
if (numb1=='false') continue;
operator=prompt('Какую операцию хотите выполнить +,-,*,/,**(степень)');
switch (operator)
{
case '+':
    numb2=failnumber(numb2=prompt('Введите второе слагаемое'));
    if (numb2=='false') continue;
    alert ('Результат сложения '+sum(numb1,numb2)); 
    break;
case '-':
    numb2=failnumber(numb2=prompt('Введите вычетаемое значение'));
    if (numb2=='false') continue;
    alert ('Результат вычетания '+differ(numb1,numb2)); 
    break;
case '*':
    numb2=failnumber(numb2=prompt('Введите второй множитель'));
    if (numb2=='false') continue;
    alert ('Результат умножения '+multi(numb1,numb2)); 
    break;
case '/':
    numb2=failnumber(numb2=prompt('Введите делитель'));
    if (numb2=='false') continue;
    if (numb2=='0') 
    {
        alert ('На ноль делить нельзя');
        continue;
    }
    alert ('Результат деления '+division(numb1,numb2)); 
    break;
case '**':
    numb2=failnumber(numb2=prompt('Введите степень в которую возводим'));
    if (numb2=='false') continue;
    alert ('Результат возведения в степень '+degree(numb1,numb2)); 
    break;
default:
    alert('Unknown operation');       
}
}while(confirm('Повторный рассчет?'));
alert('Всего доброго!');
}