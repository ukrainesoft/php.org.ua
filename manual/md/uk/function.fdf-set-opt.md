- [«
fdf_set_on_import_javascript](function.fdf-set-on-import-javascript.md)
- [fdf_set_status »](function.fdf-set-status.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює параметри поля

#fdf_set_opt

(PHP 4 \>u003d 4.0.2, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_opt — Встановлює параметри поля

### Опис

**fdf_set_opt**(
resource `$fdf_document`,
string `$fieldname`,
int `$element`,
string `$str1`,
string `$str2`
): bool

Встановлює параметри заданого поля.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

`fieldname`
Ім'я поля FDF у вигляді рядка.

`element`

`str1`

`str2`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [fdf_set_flags()](function.fdf-set-flags.md) - Встановлює прапор
поля
