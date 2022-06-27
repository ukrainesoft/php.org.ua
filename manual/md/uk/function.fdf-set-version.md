- [«fdf_set_value](function.fdf-set-value.md)
- [GnuPG »](book.gnupg.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює номер версії для FDF

#fdf_set_version

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_version — Встановлює номер версії для файлу FDF

### Опис

**fdf_set_version**(resource `$fdf_document`, string `$version`): bool

Встановлює `version` FDF для цього документа.

Деякі функції, підтримувані модулем, доступні лише у нових
версіях FDF.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

`version`
Номер версії. Для поточного набору інструментів FDF 5.0 це можливо
`1.2`, `1.3` або `1.4`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [fdf_get_version()](function.fdf-get-version.md) - Отримує номер
версії для FDF API або файлу
