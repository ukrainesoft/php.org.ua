- [«fdf_get_opt](function.fdf-get-opt.md)
- [fdf_get_value »](function.fdf-get-value.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Отримує значення ключа /STATUS

#fdf_get_status

(PHP 4, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_get_status — Отримує значення ключа /STATUS

### Опис

**fdf_get_status**(resource `$fdf_document`): string

Отримує значення ключа `/STATUS`.

### Список параметрів

`fdf_document`
Дескриптор FDF-документа, повернутий функціями
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) або
[fdf_open_string()](function.fdf-open-string.md).

### Значення, що повертаються

Повертає значення ключа у вигляді рядка.

### Дивіться також

- [fdf_set_status()](function.fdf-set-status.md) - Встановлює
значення ключа /STATUS
