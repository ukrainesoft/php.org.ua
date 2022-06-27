- [«trader_apo](function.trader-apo.md)
- [trader_aroonosc »](function.trader-aroonosc.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Індикатор Aroon

# trader_aroon

(PECL trader \>u003d 0.2.0)

trader_aroon — Індикатор Aroon

### Опис

**trader_aroon**(array `$high`, array `$low`, int `$timePeriod` u003d ?):
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
