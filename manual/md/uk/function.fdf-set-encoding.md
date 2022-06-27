- [«fdf_set_ap](function.fdf-set-ap.md)
- [fdf_set_file »](function.fdf-set-file.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює кодування символів FDF

#fdf_set_encoding

(PHP 4 \>u003d 4.0.7, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_encoding — Встановлює кодування символів FDF

### Опис

**fdf_set_encoding**(resource `$fdf_document`, string `$encoding`): bool

Встановлює кодування символів для FDF.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

`encoding`
Назва кодування. Підтримуються такі значення: "Shift-JIS",
"UHC", "GBK" і "BigFive".

Порожній рядок скидає кодування за замовчуванням у схему
`PDFDocEncoding/Unicode`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
