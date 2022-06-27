- [« ibase_blob_create](function.ibase-blob-create.md)
- [ibase_blob_get »](function.ibase-blob-get.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Виводить вміст BLOB-об'єкта у браузер

# ibase_blob_echo

(PHP 5, PHP 7 \< 7.4.0)

ibase_blob_echo — Виводить вміст BLOB-об'єкта у браузер

### Опис

**ibase_blob_echo**(string `$blob_id`): bool

**ibase_blob_echo**(resource `$link_identifier`, string `$blob_id`):
bool

Функція відкриває BLOB-об'єкт для читання та надсилає його вміст на
стандартний висновок (найчастіше – браузер).

### Список параметрів

`link_identifier`
Ідентифікатор посилання на InterBase. Якщо не вказано, передбачається остання
відкрите посилання.

`blob_id`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [ibase_blob_open()](function.ibase-blob-open.md) - Відкриває
BLOB-об'єкт для вилучення частин даних
- [ibase_blob_close()](function.ibase-blob-close.md) - Закриває
BLOB-об'єкт
- [ibase_blob_get()](function.ibase-blob-get.md) - Отримує
кількість байтів від відкритого BLOB-об'єкта
