- [« trader_set_compat](function.trader-set-compat.md)
- [trader_sin »](function.trader-sin.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Встановлює нестабільний період

# trader_set_unstable_period

(PECL trader \>u003d 0.2.2)

trader_set_unstable_period — Встановлює нестабільний період

### Опис

**trader_set_unstable_period**(int `$functionId`, int `$timePeriod`):
void

Впливає на фактор нестабільного періоду для чутливих до нього
функцій. Додаткову інформацію про нестабільні періоди можна знайти
на сторінці документації з API
[» TA-Lib](http://ta-lib.org/d_api/ta_setunstableperiod.md).

### Список параметрів

`functionId`
Ідентифікатор функції, на яку має бути встановлений коефіцієнт.
Серія констант [TRADER_FUNC_UNST\_\*](trader.constants.md) може
використовуватись для впливу на відповідну функцію.

`timePeriod`
Значення нестабільного періоду.

### Значення, що повертаються

Функція не повертає значення після виконання.
