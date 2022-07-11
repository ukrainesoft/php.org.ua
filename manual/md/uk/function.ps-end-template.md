- [«ps_end_pattern](function.ps-end-pattern.md)
- [ps_fill_stroke »](function.ps-fill-stroke.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Завершує шаблон

#ps_end_template

(PECL ps \>u003d 1.2.0)

ps_end_template — Завершує шаблон

### Опис

**ps_end_template**(resource `$psdoc`): bool

Завершує шаблон, який було розпочато за допомогою
[ps_begin_template()](function.ps-begin-template.md). Після завершення
шаблону можна використовувати як зображення.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_begin_template()](function.ps-begin-template.md) - Починає
новий шаблон
