- [«ps_circle](function.ps-circle.md)
- [ps_close_image »](function.ps-close-image.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Відображення кліпів по поточному шляху

#ps_clip

(PECL ps \>u003d 1.1.0)

ps_clip — Відтворення кліпів по поточному шляху

### Опис

**ps_clip**(resource `$psdoc`): bool

Бере поточний шлях та використовує його для визначення межі області
відсікання. Все, що намальовано за межами цієї області, не буде
видно.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_closepath()](function.ps-closepath.md) - Замикає шлях
