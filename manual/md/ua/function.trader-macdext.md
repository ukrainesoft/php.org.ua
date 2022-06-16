- [ trader_macd](function.trader-macd.md)
- [trader_macdfix»](function.trader-macdfix.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- MACD з керованим типом MA

#trader_macdext

(PECL trader \>u003d 0.2.0)

trader_macdext - MACD з керованим типом MA

### Опис

**trader_macdext**(
array `$real`,
int `$fastPeriod` u003d ?,
int `$fastMAType` u003d ?,
int `$slowPeriod` u003d ?,
int `$slowMAType` u003d ?,
int `$signalPeriod` u003d ?,
int `$signalMAType` u003d ?
): array

### Список параметрів

`real`
Масив, який містить реальні значення.

`fastPeriod`
Номер періоду для швидкого ковзного середнього. Допустимі значення від 2
до 100 000.

`fastMAType`
Тип ковзної середньої для швидкого ковзного середнього. Слід
використовувати серію констант [TRADER_MA_TYPE\_\*](trader.constants.md).

`slowPeriod`
Номер періоду для повільного ковзного середнього. Допустимі значення від
2 до 100 000.

`slowMAType`
Тип ковзної середньої для повільного ковзного середнього. Слід
використовувати серію констант [TRADER_MA_TYPE\_\*](trader.constants.md).

`signalPeriod`
Згладжування сигнальної лінії (номер періоду). Допустимі значення від
1 до 100 000.

`signalMAType`
Тип ковзної середньої сигнальної лінії. Слід використовувати серію
констант [TRADER_MA_TYPE\_\*](trader.constants.md).

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
