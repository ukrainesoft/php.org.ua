- [« ibase_blob_add](function.ibase-blob-add.md)
- [ibase_blob_close »](function.ibase-blob-close.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Скасує створення BLOB-об'єкта

# ibase_blob_cancel

(PHP 5, PHP 7 \< 7.4.0)

ibase_blob_cancel — Скасує створення BLOB-об'єкта

### Опис

**ibase_blob_cancel**(resource `$blob_handle`): bool

Ця функція відкидає BLOB-об'єкт, якщо він ще не був закритий за допомогою
[ibase_blob_close()](function.ibase-blob-close.md).

### Список параметрів

`blob_handle`
Дескриптор BLOB-об'єкта, відкритий за допомогою
[ibase_blob_create()](function.ibase-blob-create.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ibase_blob_close()](function.ibase-blob-close.md) - Закриває
BLOB-об'єкт
- [ibase_blob_create()](function.ibase-blob-create.md) - Створює
новий BLOB-об'єкт для заповнення даними
- [ibase_blob_import()](function.ibase-blob-import.md) - Створює
BLOB-об'єкт, копіює файл і закриває його
