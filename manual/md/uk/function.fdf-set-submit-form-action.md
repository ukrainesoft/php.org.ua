- [«fdf_set_status](function.fdf-set-status.md)
- [fdf_set_target_frame »](function.fdf-set-target-frame.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює дію форми надсилання поля

#fdf_set_submit_form_action

(PHP 4 \>u003d 4.0.2, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_submit_form_action — Встановлює дію форми надсилання поля

### Опис

**fdf_set_submit_form_action**(
resource `$fdf_document`,
string `$fieldname`,
int `$trigger`,
string `$script`,
int `$flags`
): bool

Встановлює дію форми надсилання для заданого поля.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) або
[fdf_open_string()](function.fdf-open-string.md).

`fieldname`
Ім'я поля FDF у вигляді рядка.

`trigger`

`script`

`flags`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [fdf_set_javascript_action()](function.fdf-set-javascript-action.md) -
Встановлює дію JavaScript для поля
