- [«ps_fill_stroke](function.ps-fill-stroke.md)
- [ps_findfont »](function.ps-findfont.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Заповнює поточний шлях

#ps_fill

(PECL ps \>u003d 1.1.0)

ps_fill — Заповнює поточний шлях

### Опис

**ps_fill**(resource `$psdoc`): bool

Заповнює шлях, створений за допомогою раніше викликаних функцій малювання,
таких як [ps_lineto()](function.ps-lineto.md).

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_fill_stroke()](function.ps-fill-stroke.md) - Заповнює та
обводить поточний шлях
- [ps_stroke()](function.ps-stroke.md) - Малює поточний шлях
