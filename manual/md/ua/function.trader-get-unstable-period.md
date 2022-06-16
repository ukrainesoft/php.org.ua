- [« trader_get_compat](function.trader-get-compat.md)
- [trader_ht_dcperiod »](function.trader-ht-dcperiod.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Отримує нестабільний період

# trader_get_unstable_period

(PECL trader \>u003d 0.2.2)

trader_get_unstable_period — Отримує нестабільний період

### Опис

**trader_get_unstable_period**(int `$functionId`): int

Отримує нестабільний коефіцієнт періоду конкретної функції.

### Список параметрів

`functionId`
Ідентифікатор функції, для якого необхідно прочитати фактор. Слід
використовувати серію констант
[TRADER_FUNC_UNST\_\*](trader.constants.md).

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
