- [«ps_end_page](function.ps-end-page.md)
- [ps_end_template »](function.ps-end-template.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Завершує шаблон

#ps_end_pattern

(PECL ps \>u003d 1.2.0)

ps_end_pattern — Завершує шаблон

### Опис

**ps_end_pattern**(resource `$psdoc`): bool

Завершує шаблон, який було розпочато з
[ps_begin_pattern()](function.ps-begin-pattern.md). Коли шаблон
закінчено, його можна використовувати як колір для заливання областей.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_begin_pattern()](function.ps-begin-pattern.md) - Починає
новий візерунок
