- [ trader_add](function.trader-add.md)
- [trader_adx »](function.trader-adx.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- осцилятор Чайкіна

# trader_adosc

(PECL trader \>u003d 0.2.0)

trader_adosc - Осцилятор Чайкіна

### Опис

**trader_adosc**(
array `$high`,
array `$low`,
array `$close`,
array `$volume`,
int `$fastPeriod` u003d ?,
int `$slowPeriod` u003d ?
): array

### Список параметрів

`high`
Висока вартість, масив реальних значень.

`low`
Низька вартість, масив реальних значень.

`close`
Ціна закриття, масив реальних значень.

`volume`
Обсяг торгів, масив реальних значень.

`fastPeriod`
Номер періоду для швидкого ковзного середнього. Допустимі значення від 2
до 100 000.

`slowPeriod`
Номер періоду для повільного ковзного середнього. Допустимі значення від
2 до 100 000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
