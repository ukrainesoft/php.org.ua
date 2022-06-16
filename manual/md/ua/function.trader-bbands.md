- [«trader_avgprice](function.trader-avgprice.md)
- [trader_beta »](function.trader-beta.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Смуги Боллінджера

# trader_bbands

(PECL trader \>u003d 0.2.0)

trader_bbands — Смуги Боллінджера

### Опис

**trader_bbands**(
array `$real`,
int `$timePeriod` u003d ?,
float `$nbDevUp` u003d ?,
float `$nbDevDn` u003d ?,
int `$mAType` u003d ?
): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

`nbDevUp`
Розмножувач для верхньої смуги. Допустимі значення від
[TRADER_REAL_MIN](trader.constants.md#constant.trader-real-min) до
[TRADER_REAL_MAX](trader.constants.md#constant.trader-real-max).

`nbDevDn`
Розмножувач для нижньої смуги. Допустимі значення від
[TRADER_REAL_MIN](trader.constants.md#constant.trader-real-min) до
[TRADER_REAL_MAX](trader.constants.md#constant.trader-real-max).

`mAType`
Тип ковзної середньої. Слід використовувати серію констант
[TRADER_MA_TYPE\_\*](trader.constants.md).

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
