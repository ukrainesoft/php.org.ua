- [«fdf_save](function.fdf-save.md)
- [fdf_set_encoding »](function.fdf-set-encoding.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює зовнішній вигляд поля

#fdf_set_ap

(PHP 4, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_ap — Встановлює зовнішній вигляд поля

### Опис

**fdf_set_ap**(
resource `$fdf_document`,
string `$field_name`,
int `$face`,
string `$filename`,
int `$page_number`
): bool

Встановлює зовнішній вигляд поля (тобто значення ключа `/AP`).

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

`field_name`

`face`
Допустимі значення: **`FDFNormalAP`**, **`FDFRolloverAP`** та
**`FDFDownAP`**.

`filename`

`page_number`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
