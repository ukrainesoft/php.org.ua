- [ trader_atan](function.trader-atan.md)
- [trader_avgprice »](function.trader-avgprice.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Середній істинний діапазон

# trader_atr

(PECL trader \>u003d 0.2.0)

trader_atr — Середній дійсний діапазон

### Опис

**trader_atr**(
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
