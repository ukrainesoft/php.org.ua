- [«trader_rsi](function.trader-rsi.md)
- [trader_sarext »](function.trader-sarext.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Параболічний SAR

# trader_sar

(PECL trader \>u003d 0.2.0)

trader_sar - Параболічний SAR

### Опис

**trader_sar**(
array `$high`,
array `$low`,
float `$acceleration` u003d ?,
float `$maximum` u003d ?
): array

### Список параметрів

`high`
Висока вартість, масив реальних значень.

`low`
Низька вартість, масив реальних значень.

`acceleration`
Коефіцієнт прискорення використовується максимального значення. Допустимий
діапазон від 0 до
[TRADER_REAL_MAX](trader.constants.md#constant.trader-real-max).

`maximum`
Коефіцієнт прискорення Максимальне значення. Допустимий діапазон від 0 до
[TRADER_REAL_MAX](trader.constants.md#constant.trader-real-max).

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
