- [«trader_minmaxindex](function.trader-minmaxindex.md)
- [trader_minus_dm »](function.trader-minus-dm.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Мінус-спрямований індикатор

#trader_minus_di

(PECL trader \>u003d 0.2.0)

trader_minus_di — Мінус-спрямований індикатор

### Опис

**trader_minus_di**(
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
