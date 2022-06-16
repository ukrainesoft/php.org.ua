- [«fdf_set_file](function.fdf-set-file.md)
- [fdf_set_javascript_action
»](function.fdf-set-javascript-action.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює прапор поля

#fdf_set_flags

(PHP 4 \>u003d 4.0.2, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_flags — Встановлює прапор поля

### Опис

**fdf_set_flags**(
resource `$fdf_document`,
string `$fieldname`,
int `$whichFlags`,
int `$newFlags`
): bool

Встановлює певні прапори поля.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

`fieldname`
Ім'я поля FDF у вигляді рядка.

`whichFlags`

`newFlags`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [fdf_set_opt()](function.fdf-set-opt.md) - Встановлює параметри
поля
