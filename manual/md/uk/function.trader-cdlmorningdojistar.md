- [« trader_cdlmathold](function.trader-cdlmathold.md)
- [trader_cdlmorningstar »](function.trader-cdlmorningstar.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Ранкова зірка дожі

# trader_cdlmorningdojistar

(PECL trader \>u003d 0.2.0)

trader_cdlmorningdojistar — Ранкова зірка дожі

### Опис

**trader_cdlmorningdojistar**(
array `$open`,
array `$high`,
array `$low`,
array `$close`,
float `$penetration` u003d ?
): array

### Список параметрів

`open`
Ціна відкриття масив реальних значень.

`high`
Висока вартість, масив реальних значень.

`low`
Низька вартість, масив реальних значень.

`close`
Ціна закриття, масив реальних значень.

`penetration`
Відсоток проникнення однієї свічки всередині іншої свічки.

### Значення, що повертаються

Повертає масив з обчисленими даними або false у разі
виникнення помилки.
