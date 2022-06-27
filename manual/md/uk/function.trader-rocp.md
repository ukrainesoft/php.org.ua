- [«trader_roc](function.trader-roc.md)
- [trader_rocr100 »](function.trader-rocr100.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Коефіцієнт зміни у відсотках: (ціна-попередня ціна)/попередня
ціна

# trader_rocp

(PECL trader \>u003d 0.2.0)

trader_rocp - Коефіцієнт зміни у відсотках: (ціна-попередня
ціна)/попередня ціна

### Опис

**trader_rocp**(array `$real`, int `$timePeriod` u003d ?): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
