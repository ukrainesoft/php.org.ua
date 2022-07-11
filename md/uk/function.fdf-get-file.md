- [«fdf_get_encoding](function.fdf-get-encoding.md)
- [fdf_get_flags »](function.fdf-get-flags.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Отримує значення ключа /F

#fdf_get_file

(PHP 4, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_get_file — Отримує значення ключа /F

### Опис

**fdf_get_file**(resource `$fdf_document`): string

Отримує значення ключа `/F`.

### Список параметрів

`fdf_document`
Дескриптор FDF-документа, повернутий функціями
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) або
[fdf_open_string()](function.fdf-open-string.md).

### Значення, що повертаються

Повертає значення ключа у вигляді рядка.

### Дивіться також

- [fdf_set_file()](function.fdf-set-file.md) - Встановлює
PDF-документ для відображення даних FDF
