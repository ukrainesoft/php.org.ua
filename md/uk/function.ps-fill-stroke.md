- [«ps_end_template](function.ps-end-template.md)
- [ps_fill »](function.ps-fill.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Заповнює та обводить поточний шлях

#ps_fill_stroke

(PECL ps \>u003d 1.1.0)

ps_fill_stroke — Заповнює та обводить поточний шлях

### Опис

**ps_fill_stroke**(resource `$psdoc`): bool

Заповнює та обводить шлях, побудований за допомогою раніше викликаних функцій
малювання, таких як [ps_lineto()](function.ps-lineto.md).

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_fill()](function.ps-fill.md) - Заповнює поточний шлях
- [ps_stroke()](function.ps-stroke.md) - Малює поточний шлях
