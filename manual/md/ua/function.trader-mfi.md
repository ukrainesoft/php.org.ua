- [«trader_medprice](function.trader-medprice.md)
- [trader_midpoint »](function.trader-midpoint.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- індекс грошових потоків

# trader_mfi

(PECL trader \>u003d 0.2.0)

trader_mfi - Індекс грошових потоків

### Опис

**trader_mfi**(
array `$high`,
array `$low`,
array `$close`,
array `$volume`,
int `$timePeriod` u003d ?
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

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
