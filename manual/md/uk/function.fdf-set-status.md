- [«fdf_set_opt](function.fdf-set-opt.md)
- [fdf_set_submit_form_action
»](function.fdf-set-submit-form-action.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює значення ключа/STATUS

#fdf_set_status

(PHP 4, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_status — Встановлює значення ключа /STATUS

### Опис

**fdf_set_status**(resource `$fdf_document`, string `$status`): bool

Встановлює значення ключа `/STATUS`. Коли клієнт отримує FDF з
встановленим статусом, він становить значення у вікні попередження.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

`status`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [fdf_get_status()](function.fdf-get-status.md) - Отримує значення
ключа / STATUS
