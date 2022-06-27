- [«ps_closepath_stroke](function.ps-closepath-stroke.md)
- [ps_continue_text »](function.ps-continue-text.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Замикає шлях

#ps_closepath

(PECL ps \>u003d 1.1.0)

ps_closepath — Замикає шлях

### Опис

**ps_closepath**(resource `$psdoc`): bool

Поєднує останню точку з першою точкою шляху. Отриманий контур можна
використовувати для обведення, заливки, обрізки та ін.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_clip()](function.ps-clip.md) - Відображення кліпів за поточним
шляхи
- [ps_closepath_stroke()](function.ps-closepath-stroke.md) -
Замикає та обводить контур
