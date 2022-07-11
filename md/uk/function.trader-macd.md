- [ trader_ma](function.trader-ma.md)
- [trader_macdext »](function.trader-macdext.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Слизька середня збіжність/дивергенція

#trader_macd

(PECL trader \>u003d 0.2.0)

trader_macd — Змінна середня збіжність/дивергенція

### Опис

**trader_macd**(
array `$real`,
int `$fastPeriod` u003d ?,
int `$slowPeriod` u003d ?,
int `$signalPeriod` u003d ?
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

`signalPeriod`
Згладжування сигнальної лінії (номер періоду). Допустимі значення від
1 до 100 000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
