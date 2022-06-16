- [«ps_close_image](function.ps-close-image.md)
- [ps_closepath_stroke »](function.ps-closepath-stroke.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Закриває документ PostScript

#ps_close

(PECL ps \>u003d 1.1.0)

ps_close — Закриває документ PostScript

### Опис

**ps_close**(resource `$psdoc`): bool

Закриває документ PostScript.

Функція записує кількість сторінок у документі PostScript. Вона також
записує ієрархію закладок. **ps_close()** не звільняє ресурси, як
[ps_delete()](function.ps-delete.md).

Функція також викликається функцією
[ps_delete()](function.ps-delete.md), якщо вона не була викликана раніше.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_open_file()](function.ps-open-file.md) - Відкриває файл для
висновку
- [ps_delete()](function.ps-delete.md) - Видаляє всі ресурси
документа PostScript
