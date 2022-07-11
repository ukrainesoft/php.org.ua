- [«fdf_error](function.fdf-error.md)
- [fdf_get_attachment »](function.fdf-get-attachment.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- набуває вигляду поля

#fdf_get_ap

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_get_ap — Отримує вигляд поля

### Опис

**fdf_get_ap**(
resource `$fdf_document`,
string `$field`,
int `$face`,
string `$filename`
): bool

Набуває вигляду `field` (тобто значення ключа /AP) і зберігає його у файлі.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) або
[fdf_open_string()](function.fdf-open-string.md).

`field`

`face`
Можливі значення: **`FDFNormalAP`**, **`FDFRolloverAP`** та
**`FDFDownAP`**.

`filename`
Зовнішній вигляд буде збережено у цьому параметрі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
