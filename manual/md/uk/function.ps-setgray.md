- [«ps_setfont](function.ps-setfont.md)
- [ps_setlinecap »] (function.ps-setlinecap.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Встановлює значення сірого

#ps_setgray

(PECL ps \>u003d 1.1.0)

ps_setgray — Встановлює значення сірого

### Опис

**ps_setgray**(resource `$psdoc`, float `$gray`): bool

Встановлює значення сірого для наступних операцій малювання.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`gray`
Значення має бути від 0 (білий) до 1 (чорний).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_setcolor()](function.ps-setcolor.md) - Встановлює поточний
колір
