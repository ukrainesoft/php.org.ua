- [«trader_stoch](function.trader-stoch.md)
- [trader_stochrsi »](function.trader-stochrsi.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Швидкий стохастичний осцилятор

#trader_stochf

(PECL trader \>u003d 0.2.0)

trader_stochf - Швидкий стохастичний осцилятор

### Опис

**trader_stochf**(
array `$high`,
array `$low`,
array `$close`,
int `$fastK_Period` u003d ?,
int `$fastD_Period` u003d ?,
int `$fastD_MAType` u003d ?
): array

### Список параметрів

`high`
Висока вартість, масив реальних значень.

`low`
Низька вартість, масив реальних значень.

`close`
Ціна закриття, масив реальних значень.

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
