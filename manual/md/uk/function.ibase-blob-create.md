- [« ibase_blob_close](function.ibase-blob-close.md)
- [ibase_blob_echo »](function.ibase-blob-echo.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Створює новий BLOB-об'єкт для заповнення даними

# ibase_blob_create

(PHP 5, PHP 7 \< 7.4.0)

ibase_blob_create — Створює новий BLOB-об'єкт для заповнення даними

### Опис

**ibase_blob_create**(resource `$link_identifier` u003d **`null`**):
resource\|false

**ibase_blob_create()** створює новий BLOB-об'єкт для заповнення
даними.

### Список параметрів

`link_identifier`
Ідентифікатор посилання на InterBase. Якщо не вказано, передбачається
останнє відкрите посилання.

### Значення, що повертаються

Повертає дескриптор BLOB-об'єкта для подальшого використання з
[ibase_blob_add()](function.ibase-blob-add.md) або **`false`**
у разі виникнення помилки.

### Дивіться також

- [ibase_blob_add()](function.ibase-blob-add.md) - Додає дані
у новостворений BLOB-об'єкт
- [ibase_blob_cancel()](function.ibase-blob-cancel.md) - Скасує
створення BLOB-об'єкта
- [ibase_blob_close()](function.ibase-blob-close.md) - Закриває
BLOB-об'єкт
- [ibase_blob_import()](function.ibase-blob-import.md) - Створює
BLOB-об'єкт, копіює файл і закриває його
