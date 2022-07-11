- [ trader_bop](function.trader-bop.md)
- [trader_cdl2crows »](function.trader-cdl2crows.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- індекс товарного каналу

# trader_cci

(PECL trader \>u003d 0.2.0)

trader_cci - Індекс товарного каналу

### Опис

**trader_cci**(
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
