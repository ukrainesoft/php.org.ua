- [ trader_div](function.trader-div.md)
- [trader_ema»] (function.trader-ema.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- індекс спрямованого руху

# trader_dx

(PECL trader \>u003d 0.2.0)

trader_dx - Індекс спрямованого руху

### Опис

**trader_dx**(
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
