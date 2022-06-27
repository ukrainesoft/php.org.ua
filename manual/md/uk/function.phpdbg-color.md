- [«phpdbg_clear](function.phpdbg-clear.md)
- [phpdbg_end_oplog »](function.phpdbg-end-oplog.md)

- [PHP Manual](index.md)
- [Функції phpdbg](ref.phpdbg.md)
- Задати колір елементу

#phpdbg_color

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

phpdbg_color — Задати колір елементу

### Опис

**phpdbg_color**(int `$element`, string `$color`): void

Встановлює колір `color` для елементу `element`.

### Список параметрів

`element`
Одна із констант **`PHPDBG_COLOR_*`**.

`col`
Назва кольору. Одне з: `white`, `red`, `green`, `yellow`, `blue`, `purple`,
`Cyan` або `black`. Опціонально можна використовувати суфікси `-bold` або
`-underline`. Наприклад `white-bold` або `green-underline`.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [phpdbg_prompt()](function.phpdbg-prompt.md) - Встановити
запрошення командного рядка
