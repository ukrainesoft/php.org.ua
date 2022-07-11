- [ trader_plus_dm](function.trader-plus-dm.md)
- [trader_roc»](function.trader-roc.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- відсотковий ціновий осцилятор

# trader_ppo

(PECL trader \>u003d 0.2.0)

trader_ppo — Відсотковий ціновий осцилятор

### Опис

**trader_ppo**(
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
