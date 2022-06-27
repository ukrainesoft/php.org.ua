- [«fbird_blob_add](function.fbird-blob-add.md)
- [fbird_blob_close »](function.fbird-blob-close.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Скасує створення BLOB

#fbird_blob_cancel

(PHP 5, PHP 7 \< 7.4.0)

fbird_blob_cancel — Скасовує створення BLOB

### Опис

**fbird_blob_cancel**(resource `$blob_handle`): bool

Ця функція припиняє використання BLOB, якщо вона ще не була закрита
[fbird_blob_close()](function.fbird-blob-close.md).

### Список параметрів

`blob_handle`
Дескриптор BLOB, відкритий за допомогою
[fbird_blob_create()](function.fbird-blob-create.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [fbird_blob_close()](function.fbird-blob-close.md) - Псевдонім
ibase_blob_close
- [fbird_blob_create()](function.fbird-blob-create.md) - Псевдонім
ibase_blob_create
- [fbird_blob_import()](function.fbird-blob-import.md) - Псевдонім
ibase_blob_import
