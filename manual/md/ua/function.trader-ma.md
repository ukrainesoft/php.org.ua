- [ trader_log10](function.trader-log10.md)
- [trader_macd »](function.trader-macd.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Змінна середня

# trader_ma

(PECL trader \>u003d 0.2.0)

trader_ma — Середня ковзна.

### Опис

**trader_ma**(array `$real`, int `$timePeriod` u003d ?, int `$mAType` u003d ?):
array

### Список параметрів

`real`
Масив, який містить реальні значення.

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

`mAType`
Тип ковзної середньої. Слід використовувати серію констант
[TRADER_MA_TYPE\_\*](trader.constants.md).

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
