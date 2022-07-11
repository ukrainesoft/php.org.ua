- [«fdf_get_ap](function.fdf-get-ap.md)
- [fdf_get_encoding »](function.fdf-get-encoding.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Виймає завантажений файл, вбудований у FDF

#fdf_get_attachment

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_get_attachment — Витягує завантажений файл, вбудований у FDF

### Опис

**fdf_get_attachment**(resource `$fdf_document`, string `$fieldname`,
string `$savepath`): array

Витягує файл, завантажений за допомогою поля "вибір файлу" `fieldname`, та
зберігає його в `savepath`.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) або
[fdf_open_string()](function.fdf-open-string.md).

`fieldname`

`savepath`
Можливо, це ім'я простого файлу або існуючого каталогу, в якому
файл має бути створений під його вихідним ім'ям. Будь-який існуючий файл
з таким самим ім'ям буде перезаписано.

> **Примітка**:
>
> Здається, немає іншого способу дізнатися вихідне ім'я файлу, крім як
> зберегти файл, використовуючи каталог як `savepath` та перевірити базове
> ім'я, під яким його було збережено.

### Значення, що повертаються

Повернутий масив містить такі поля:

- `path` - шлях, де зберігається файл
- `size` - розмір файлу, що зберігається в байтах
- `type` - mimetype, якщо він вказаний у FDF

### Приклади

**Приклад #1 Збереження завантаженого файлу**

`<?php $fdf u003d fdf_open_string($HTTP_FDF_DATA); $datau003du003dfdf_get_attachment($fdf,"filename","/tmpdir"); echo "Завантажений файл зберігається в $data[path]";?> `
