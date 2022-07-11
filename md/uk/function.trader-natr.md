- [ trader_mult](function.trader-mult.md)
- [trader_obv »] (function.trader-obv.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Нормалізований середній дійсний діапазон

#trader_natr

(PECL trader \>u003d 0.2.0)

trader_natr - Нормалізований середній істинний діапазон

### Опис

**trader_natr**(
array `$high`,
array `$low`,
array `$close`,
int `$timePeriod` u003d ?
): array

### Список параметрів

`high`
Висока вартість, масив реальних значень.

`low`
Низька вартість, масив реальних значень.

`close`
Ціна закриття, масив реальних значень.

`timePeriod`
Номер періоду. Допустимі значення від 2 до 100000.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
