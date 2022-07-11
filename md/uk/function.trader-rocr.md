- [«trader_rocr100](function.trader-rocr100.md)
- [trader_rsi »] (function.trader-rsi.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Коефіцієнт зміни курсу: (ціна/попередня ціна)

#trader_rocr

(PECL trader \>u003d 0.2.0)

trader_rocr — Коефіцієнт зміни курсу: (ціна/попередня ціна)

### Опис

**trader_rocr**(array `$real`, int `$timePeriod` u003d ?): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
