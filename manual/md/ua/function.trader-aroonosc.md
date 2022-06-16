- [«trader_aroon](function.trader-aroon.md)
- [trader_asin »](function.trader-asin.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Осцилятор індикатора Aroon

# trader_aroonosc

(PECL trader \>u003d 0.2.0)

trader_aroonosc — Осцилятор індикатора Aroon

### Опис

**trader_aroonosc**(array `$high`, array `$low`, int `$timePeriod` u003d ?):
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
