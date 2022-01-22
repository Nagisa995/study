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
function summa(a,b)
{return (a+b)}
function raznost(a,b)
{return (a-b)}
function umnozhenie(a,b)
{return (a*b)}
function delenie(a,b)
{return (a/b)}
function stepen(a,b)
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
    alert ('Результат сложения '+summa(numb1,numb2)); 
    break;
case '-':
    numb2=failnumber(numb2=prompt('Введите вычетаемое значение'));
    if (numb2=='false') continue;
    alert ('Результат вычетания '+raznost(numb1,numb2)); 
    break;
case '*':
    numb2=failnumber(numb2=prompt('Введите второй множитель'));
    if (numb2=='false') continue;
    alert ('Результат умножения '+umnozhenie(numb1,numb2)); 
    break;
case '/':
    numb2=failnumber(numb2=prompt('Введите делитель'));
    if (numb2=='false') continue;
    if (numb2=='0') 
    {
        alert ('На ноль делить нельзя');
        continue;
    }
    alert ('Результат деления '+delenie(numb1,numb2)); 
    break;
case '**':
    numb2=failnumber(numb2=prompt('Введите степень в которую возводим'));
    if (numb2=='false') continue;
    alert ('Результат возведения в степень '+stepen(numb1,numb2)); 
    break;
default:
    alert('Unknown operation');       
}
}while(confirm('Повторный рассчет?'));
alert('Всего доброго!');
}