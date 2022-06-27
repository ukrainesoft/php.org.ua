- [« trader_cdlengulfing](function.trader-cdlengulfing.md)
- [trader_cdleveningstar »](function.trader-cdleveningstar.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Вечірня дожі-зірка

# trader_cdleveningdojistar

(PECL trader \>u003d 0.2.0)

trader_cdleveningdojistar — Вечірня дожі-зірка

### Опис

**trader_cdleveningdojistar**(
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
