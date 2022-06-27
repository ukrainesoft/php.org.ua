- [«
fdf_set_submit_form_action](function.fdf-set-submit-form-action.md)
- [fdf_set_value »](function.fdf-set-value.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює цільовий кадр для відображення форми

#fdf_set_target_frame

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_target_frame — Встановлює цільовий кадр для відображення форми

### Опис

**fdf_set_target_frame**(resource `$fdf_document`, string
`$frame_name`): bool

Встановлює цільовий кадр для відображення PDF-файлу, визначеного з
за допомогою **fdf_save_file()**.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) або
[fdf_open_string()](function.fdf-open-string.md).

`frame_name`
Ім'я кадру у вигляді рядка.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- **fdf_save_file()**
