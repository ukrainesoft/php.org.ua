- [«trader_trima](function.trader-trima.md)
- [trader_tsf»](function.trader-tsf.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- 1-денна швидкість зміни (ROC) потрійний гладкою EMA

# trader_trix

(PECL trader \>u003d 0.2.0)

trader_trix - 1-денна швидкість зміни (ROC) потрійний гладкою EMA

### Опис

**trader_trix**(array `$real`, int `$timePeriod` u003d ?): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
