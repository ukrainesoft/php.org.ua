- [«fdf_get_value](function.fdf-get-value.md)
- [fdf_header »](function.fdf-header.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Отримує номер версії для FDF API або файлу

#fdf_get_version

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_get_version — Отримує номер версії для FDF API або файлу

### Опис

**fdf_get_version**(resource `$fdf_document` u003d ?): string

Повертає версію FDF для цього документа або номер версії API набору
інструментів, якщо параметр не вказано.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) або
[fdf_open_string()](function.fdf-open-string.md).

### Значення, що повертаються

Повертає версію у вигляді рядка. Для поточного набору інструментів FDF
5.0 номер версії API - `5.0`, а номер версії документа - `1.2`, `1.3`
або `1.4`.

### Дивіться також

- [fdf_set_version()](function.fdf-set-version.md) - Встановлює
номер версії для файлу FDF
