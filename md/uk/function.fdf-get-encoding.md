- [«fdf_get_attachment](function.fdf-get-attachment.md)
- [fdf_get_file »](function.fdf-get-file.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Отримує значення ключа /Encoding

#fdf_get_encoding

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_get_encoding — Отримує значення ключа /Encoding

### Опис

**fdf_get_encoding**(resource `$fdf_document`): string

Отримує значення ключа `/Encoding`.

### Список параметрів

`fdf_document`
Дескриптор FDF-документа, повернутий функціями
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) або
[fdf_open_string()](function.fdf-open-string.md).

### Значення, що повертаються

Повертає кодування у вигляді рядка. Повертається порожній рядок, якщо
використовується схема за замовчуванням `PDFDocEncoding/Unicode`.

### Дивіться також

- [fdf_set_encoding()](function.fdf-set-encoding.md) - Встановлює
кодування символів FDF
