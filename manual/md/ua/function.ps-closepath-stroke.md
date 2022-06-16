- [«ps_close](function.ps-close.md)
- [ps_closepath »](function.ps-closepath.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Замикає та обводить контур

#ps_closepath_stroke

(PECL ps \>u003d 1.1.0)

ps_closepath_stroke — Замикає та обводить контур

### Опис

**ps_closepath_stroke**(resource `$psdoc`): bool

З'єднує останню точку з першою точкою шляху і малює отриману
замкнуту лінію.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_closepath()](function.ps-closepath.md) - Замикає шлях
