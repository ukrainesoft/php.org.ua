- [ trader_stochf](function.trader-stochf.md)
- [trader_sub»](function.trader-sub.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- стохастичний відносний індекс сили

# trader_stochrsi

(PECL trader \>u003d 0.2.0)

trader_stochrsi - Стохастичний відносний індекс сили

### Опис

**trader_stochrsi**(
array `$real`,
int `$timePeriod` u003d ?,
int `$fastK_Period` u003d ?,
int `$fastD_Period` u003d ?,
int `$fastD_MAType` u003d ?
): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

`fastK_Period`
Тимчасовий період побудови лінії Fast-K. Допустимі значення від 1 до
100 000.

`fastD_Period`
Згладжує для створення лінії Fast-D. Допустимі значення від 1 до
100000 зазвичай встановлено значення 3.

`fastD_MAType`
Тип ковзної середньої для Fast-D. Слід використовувати серію констант
[TRADER_MA_TYPE\_\*](trader.constants.md).

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
