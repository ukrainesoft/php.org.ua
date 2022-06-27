- [«ps_show_xy](function.ps-show-xy.md)
- [ps_show »](function.ps-show.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Виводить текст у поточній позиції

#ps_show2

(PECL ps \>u003d 1.1.0)

ps_show2 — Виводить текст на поточну позицію

### Опис

**ps_show2**(resource `$psdoc`, string `$text`, int `$len`): bool

Виводить текст у поточній позиції. Не виводить більше `len` символів.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`text`
Текст для виведення.

`len`
Максимальна кількість символів для виводу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
