- [«trader_typprice](function.trader-typprice.md)
- [trader_var »] (function.trader-var.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Остаточний, граничний осцилятор

# trader_ultosc

(PECL trader \>u003d 0.2.0)

trader_ultosc - Остаточний, граничний осцилятор

### Опис

**trader_ultosc**(
array `$high`,
array `$low`,
array `$close`,
int `$timePeriod1` u003d ?,
int `$timePeriod2` u003d ?,
int `$timePeriod3` u003d ?
): array

### Список параметрів

`high`
Висока вартість, масив реальних значень.

`low`
Низька вартість, масив реальних значень.

`close`
Ціна закриття, масив реальних значень.

`timePeriod1`
Кількість барів (стовпців) за 1-й період. Допустимий діапазон від 1 до
100 000.

`timePeriod2`
Кількість барів (стовпців) за 2-й період. Допустимий діапазон від 1 до
100 000.

`timePeriod3`
Кількість барів (стовпців) за 3-й період. Допустимий діапазон від 1 до
100 000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
