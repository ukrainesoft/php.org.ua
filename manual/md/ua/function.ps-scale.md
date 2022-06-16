- [«ps_save](function.ps-save.md)
- [ps_set_border_color »](function.ps-set-border-color.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює коефіцієнт масштабування

#ps_scale

(PECL ps \>u003d 1.1.0)

ps_scale — Встановлює коефіцієнт масштабування

### Опис

**ps_scale**(resource `$psdoc`, float `$x`, float `$y`): bool

Встановлює горизонтальний та вертикальний масштаб системи координат.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`x`
Коефіцієнт масштабування у горизонтальному напрямку.

`y`
Коефіцієнт масштабування за вертикаллю.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_rotate()](function.ps-rotate.md) - Встановлює коефіцієнт
обертання
- [ps_translate()](function.ps-translate.md) - Змінює систему
координат
