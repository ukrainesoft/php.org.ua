- [«trader_adosc](function.trader-adosc.md)
- [trader_adxr »](function.trader-adxr.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Середній індекс спрямованого руху

#trader_adx

(PECL trader \>u003d 0.2.0)

trader_adx - Середній індекс спрямованого руху

### Опис

**trader_adx**(
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
