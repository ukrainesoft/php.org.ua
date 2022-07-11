- [« Установка](trader.installation.md)
- [Предвизначені константи »](trader.constants.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](trader.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------|--------------|--- --------------|-----------------------|
| [trader.real_precision](trader.configuration.md#ini.trader.real-precision) | 3 | PHP_INI_ALL | З версії trader 0.2 |
| [trader.real_round_mode](trader.configuration.md#ini.trader.real-round-mode) | HALF_DOWN | PHP_INI_ALL | З версії trader 0.3 |

**Опції налаштування Trader**

Коротке пояснення конфігураційних директив.

`trader.real_precision` int
Всі значення в масивах, що повертаються, будуть округлені до цієї точності.
Однак розрахунки всередині TA-Lib відбуваються з неокругленими значеннями.

`trader.real_round_mode` string
Контролює реальну політику округлення trader. Допустимі значення:
`HALF_UP`, `HALF_DOWN`, `HALF_EVEN` та `HALF_ODD`. Поведінка ідентична
функції [round()](function.round.md), що використовується з аргументом mode.
