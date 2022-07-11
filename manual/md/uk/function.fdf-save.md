- [«fdf_save_string](function.fdf-save-string.md)
- [fdf_set_ap »](function.fdf-set-ap.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Зберігає документ FDF

#fdf_save

(PHP 4, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_save — Зберігає документ FDF

### Опис

**fdf_save**(resource `$fdf_document`, string `$filename` u003d ?): bool

Зберігає документ FDF.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

`filename`
Якщо зазначено, FDF буде записаний у цей параметр. В іншому випадку
функція запише FDF у вихідний потік PHP за промовчанням.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [fdf_close()](function.fdf-close.md) - Закриває FDF-документ
- [fdf_create()](function.fdf-create.md) - Створює новий документ
FDF
- [fdf_save_string()](function.fdf-save-string.md) - Повертає
документ FDF у вигляді рядка
