- [« ibase_blob_get](function.ibase-blob-get.md)
- [ibase_blob_info »](function.ibase-blob-info.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Створює BLOB-об'єкт, копіює файл і закриває його.

# ibase_blob_import

(PHP 5, PHP 7 \< 7.4.0)

ibase_blob_import — Створює BLOB-об'єкт, копіює файл і
закриває його

### Опис

**ibase_blob_import**(resource `$link_identifier`, resource
`$file_handle`): string

**ibase_blob_import**(resource `$file_handle`): string

Функція створює BLOB-об'єкт, зчитує в нього весь файл, закриває його та
повертає призначений ідентифікатор об'єкта BLOB.

### Список параметрів

`link_identifier`
Ідентифікатор посилання на InterBase. Якщо не вказано, передбачається остання
відкрите посилання.

`file_handle`
Дескриптор файлу - повертається функцією [fopen()](function.fopen.md).

### Значення, що повертаються

Повертає ідентифікатор BLOB-об'єкта у разі успішного виконання, або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ibase_blob_import()****

` <?php$dbh u003d ibase_connect($host, $username, $password);$filename u003d '/tmp/bar';$fd u003d fopen($filename, 'r');if ($fd) {     $blob u003d ibase_blob_import ($ dbh, $ fd); fclose($fd); if (!is_string($blob)) {         // імпорт не удався    } else {        $query u003d "INSERT INTO ' $preparedu003du003dibase_prepare($dbh, $query); if (!ibase_execute($prepared, $blob)) {            // запис не удалася        }      

### Дивіться також

- [ibase_blob_add()](function.ibase-blob-add.md) - Додає дані
у новостворений BLOB-об'єкт
- [ibase_blob_cancel()](function.ibase-blob-cancel.md) - Скасує
створення BLOB-об'єкта
- [ibase_blob_close()](function.ibase-blob-close.md) - Закриває
BLOB-об'єкт
- [ibase_blob_create()](function.ibase-blob-create.md) - Створює
новий BLOB-об'єкт для заповнення даними
