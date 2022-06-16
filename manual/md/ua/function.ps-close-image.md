- [«ps_clip](function.ps-clip.md)
- [ps_close »](function.ps-close.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Закриває зображення та звільняє пам'ять

#ps_close_image

(PECL ps \>u003d 1.1.0)

ps_close_image — Закриває зображення та звільняє пам'ять

### Опис

**ps_close_image**(resource `$psdoc`, int `$imageid`): void\|false

Закриває зображення та звільняє його ресурси. Як тільки зображення
було закрито, його не можна використовувати.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий функцією
[ps_new()](function.ps-new.md).

`imageid`
Ідентифікатор ресурсу зображення, повернутий функцією
[ps_open_image()](function.ps-open-image.md) або
[ps_open_image_file()](function.ps-open-image-file.md).

### Значення, що повертаються

Повертає **`null`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ps_open_image()](function.ps-open-image.md) - Зчитує
зображення для подальшого розміщення
- [ps_open_image_file()](function.ps-open-image-file.md) - Відкриває
зображення з файлу
