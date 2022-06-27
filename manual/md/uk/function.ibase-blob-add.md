- [« ibase_backup](function.ibase-backup.md)
- [ibase_blob_cancel »](function.ibase-blob-cancel.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Додає дані у новостворений BLOB-об'єкт

# ibase_blob_add

(PHP 5, PHP 7 \< 7.4.0)

ibase_blob_add — Додає дані до новоствореного BLOB-об'єкту

### Опис

**ibase_blob_add**(resource `$blob_handle`, string `$data`): void

**ibase_blob_add()** додає дані в BLOB-об'єкт, створений за допомогою
[ibase_blob_create()](function.ibase-blob-create.md).

### Список параметрів

`blob_handle`
Дескриптор BLOB-об'єкта, відкритого за допомогою
[ibase_blob_create()](function.ibase-blob-create.md).

`data`
Дані для додавання.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [ibase_blob_cancel()](function.ibase-blob-cancel.md) - Скасує
створення BLOB-об'єкта
- [ibase_blob_close()](function.ibase-blob-close.md) - Закриває
BLOB-об'єкт
- [ibase_blob_create()](function.ibase-blob-create.md) - Створює
новий BLOB-об'єкт для заповнення даними
- [ibase_blob_import()](function.ibase-blob-import.md) - Створює
BLOB-об'єкт, копіює файл і закриває його
