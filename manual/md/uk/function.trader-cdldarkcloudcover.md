- [« trader_cdlcounterattack](function.trader-cdlcounterattack.md)
- [trader_cdldoji »](function.trader-cdldoji.md)

- [PHP Manual](index.md)
- [Функції Trader](ref.trader.md)
- Завіса з темних хмар

# trader_cdldarkcloudcover

(PECL trader \>u003d 0.2.0)

trader_cdldarkcloudcover — Завіса з темних хмар

### Опис

**trader_cdldarkcloudcover**(
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
