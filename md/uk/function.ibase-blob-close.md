- [« ibase_blob_cancel](function.ibase-blob-cancel.md)
- [ibase_blob_create »](function.ibase-blob-create.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Закриває BLOB-об'єкт

# ibase_blob_close

(PHP 5, PHP 7 \< 7.4.0)

ibase_blob_close — Закриває BLOB-об'єкт

### Опис

**ibase_blob_close**(resource `$blob_handle`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Ця функція закриває BLOB-об'єкт, відкритий для читання за допомогою
[ibase_blob_open()](function.ibase-blob-open.md) або
[ibase_blob_create()](function.ibase-blob-create.md).

### Список параметрів

`blob_handle`
BLOB-об'єкт, відкритий за допомогою
[ibase_blob_create()](function.ibase-blob-create.md) або
[ibase_blob_open()](function.ibase-blob-open.md).

### Значення, що повертаються

Якщо BLOB-об'єкт читався, функція повертає **`true`** у разі
успішного виконання, якщо BLOB записувався, функція повертає рядок,
містить ідентифікатор BLOB-об'єкта, призначений їй базою
даних. У разі невдачі функція повертає **`false`**.

### Дивіться також

- [ibase_blob_cancel()](function.ibase-blob-cancel.md) - Скасує
створення BLOB-об'єкта
- [ibase_blob_open()](function.ibase-blob-open.md) - Відкриває
BLOB-об'єкт для вилучення частин даних
