- [«fdf_set_flags](function.fdf-set-flags.md)
- [fdf_set_on_import_javascript
»](function.fdf-set-on-import-javascript.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює дію JavaScript для поля

#fdf_set_javascript_action

(PHP 4 \>u003d 4.0.2, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_javascript_action — Встановлює дію javascript для поля

### Опис

**fdf_set_javascript_action**(
resource `$fdf_document`,
string `$fieldname`,
int `$trigger`,
string `$script`
): bool

Встановлює дію JavaScript для заданого поля

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

`fieldname`
Ім'я поля FDF у вигляді рядка.

`trigger`

`script`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [fdf_set_submit_form_action()](function.fdf-set-submit-form-action.md) -
Встановлює дію форми надсилання поля
