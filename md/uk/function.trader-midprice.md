- [«trader_midpoint](function.trader-midpoint.md)
- [trader_min»](function.trader-min.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Середня ціна за період

#trader_midprice

(PECL trader \>u003d 0.2.0)

trader_midprice — Середня ціна за період

### Опис

**trader_midprice**(array `$high`, array `$low`, int `$timePeriod` u003d ?):
array

### Список параметрів

`high`
Висока вартість, масив реальних значень.

`low`
Низька вартість, масив реальних значень.

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
