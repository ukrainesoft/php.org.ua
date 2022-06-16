- [«ps_stringwidth](function.ps-stringwidth.md)
- [ps_symbol_name »](function.ps-symbol-name.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Малює поточний шлях

#ps_stroke

(PECL ps \>u003d 1.1.0)

ps_stroke — Малює поточний шлях

### Опис

**ps_stroke**(resource `$psdoc`): bool

Малює шлях, побудований за допомогою раніше викликаних функцій малювання,
таких як [ps_lineto()](function.ps-lineto.md).

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_closepath_stroke()](function.ps-closepath-stroke.md) -
Замикає та обводить контур
- [ps_fill()](function.ps-fill.md) - Заповнює поточний шлях
- [ps_fill_stroke()](function.ps-fill-stroke.md) - Заповнює та
обводить поточний шлях
