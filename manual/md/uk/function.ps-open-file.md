- [«ps_new](function.ps-new.md)
- [ps_open_image_file »](function.ps-open-image-file.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Відкриває файл для виводу

#ps_open_file

(PECL ps \>u003d 1.1.0)

ps_open_file — Відкриває файл для виводу

### Опис

**ps_open_file**(resource `$psdoc`, string `$filename` u003d ?): bool

Створює новий файл на диску і записує документ PostScript.
Файл буде закрито під час виклику [ps_close()](function.ps-close.md).

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`filename`
Назва файлу postscript. Якщо `filename` не передано, документ буде створено
у пам'яті і весь висновок йтиме прямо в браузер.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_close()](function.ps-close.md) - Закриває документ PostScript
