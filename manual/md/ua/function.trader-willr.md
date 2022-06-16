- [«trader_wclprice](function.trader-wclprice.md)
- [trader_wma »](function.trader-wma.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Відсотковий діапазон Вільямса

#trader_willr

(PECL trader \>u003d 0.2.0)

trader_willr — Відсотковий діапазон Вільямса

### Опис

**trader_willr**(
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
