- [«ps_continue_text](function.ps-continue-text.md)
- [ps_delete »] (function.ps-delete.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Малює криву

#ps_curveto

(PECL ps \>u003d 1.1.0)

ps_curveto - Малює криву

### Опис

**ps_curveto**(
resource `$psdoc`,
float `$x1`,
float `$y1`,
float `$x2`,
float `$y2`,
float `$x3`,
float `$y3`
): bool

Додає відрізок кубічної кривої Безьє, описаний трьома заданими
контрольними точками до поточного шляху. points to the current path.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`x1`
Координата X першої контрольної точки.

`y1`
Координата Y першої контрольної точки.

`x2`
Координата X другої контрольної точки.

`y2`
Координата Y другої контрольної точки.

`x3`
Координата X третьої контрольної точки.

`y3`
Координата Y третьої контрольної точки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_lineto()](function.ps-lineto.md) - Малює лінію
