- [ trader_adxr](function.trader-adxr.md)
- [trader_aroon »](function.trader-aroon.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Абсолютний ціновий осцилятор

# trader_apo

(PECL trader \>u003d 0.2.0)

trader_apo — Абсолютний ціновий осцилятор

### Опис

**trader_apo**(
array `$real`,
int `$fastPeriod` u003d ?,
int `$slowPeriod` u003d ?,
int `$mAType` u003d ?
): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`fastPeriod`
Номер періоду для швидкого ковзного середнього. Допустимі значення від 2
до 100 000.

`slowPeriod`
Номер періоду для повільного ковзного середнього. Допустимі значення від
2 до 100 000.

`mAType`
Тип ковзної середньої. Слід використовувати серію констант
[TRADER_MA_TYPE\_\*](trader.constants.md).

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
