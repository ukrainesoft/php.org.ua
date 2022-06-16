- [«ps_open_file](function.ps-open-file.md)
- [ps_open_image »](function.ps-open-image.md)

- [PHP Manual](index.md)
- [Функції PS](ref.ps.md)
- Відкриває зображення із файлу

#ps_open_image_file

(PECL ps \>u003d 1.1.0)

ps_open_image_file — Відкриває зображення з файлу

### Опис

**ps_open_image_file**(
resource `$psdoc`,
string `$type`,
string `$filename`,
string `$stringparam` u003d ?,
int `$intparam` u003d 0
): int

Завантажує зображення для подальшого використання.

### Список параметрів

`psdoc`
Ідентифікатор ресурсу файлу postscript, повернутий
[ps_new()](function.ps-new.md).

`type`
Тип зображення. Можливі значення: `png`, `jpeg` або `eps`.

`filename`
Ім'я файлу, який містить дані зображення.

`stringparam`
Параметр не використовується.

`intparam`
Параметр не використовується.

### Значення, що повертаються

Повертає ідентифікатор зображення або нуль у разі виникнення
помилки. Ідентифікатор – позитивне число більше 0.

### Дивіться також

- [ps_open_image()](function.ps-open-image.md) - Зчитує
зображення для подальшого розміщення
- [ps_place_image()](function.ps-place-image.md) - Розміщує
зображення на сторінці
- [ps_close_image()](function.ps-close-image.md) - Закриває
зображення та звільняє пам'ять
