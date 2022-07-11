- [« ibase_blob_info](function.ibase-blob-info.md)
- [ibase_close »](function.ibase-close.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Відкриває BLOB-об'єкт для вилучення частин даних

# ibase_blob_open

(PHP 5, PHP 7 \< 7.4.0)

ibase_blob_open - Відкриває BLOB-об'єкт для вилучення частин даних

### Опис

**ibase_blob_open**(resource `$link_identifier`, string `$blob_id`):
resource\|false

**ibase_blob_open**(string `$blob_id`): resource\|false

Відкриває існуючий BLOB-об'єкт читання.

### Список параметрів

`link_identifier`
Ідентифікатор посилання на InterBase. Якщо не вказано, передбачається остання
відкрите посилання.

`blob_id`
Ідентифікатор об'єкта BLOB.

### Значення, що повертаються

Повертає дескриптор BLOB-об'єкта для подальшого використання з
за допомогою [ibase_blob_get()](function.ibase-blob-get.md) або **`false`**
у разі виникнення помилки.

### Дивіться також

- [ibase_blob_close()](function.ibase-blob-close.md) - Закриває
BLOB-об'єкт
- [ibase_blob_echo()](function.ibase-blob-echo.md) - Виводить
вміст BLOB-об'єкта у браузер
- [ibase_blob_get()](function.ibase-blob-get.md) - Отримує
кількість байтів від відкритого BLOB-об'єкта
