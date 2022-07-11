- [« ibase_blob_echo](function.ibase-blob-echo.md)
- [ibase_blob_import »](function.ibase-blob-import.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Отримує кількість байтів від відкритого BLOB-об'єкта

# ibase_blob_get

(PHP 5, PHP 7 \< 7.4.0)

ibase_blob_get — Отримує кількість байтів від відкритого BLOB-об'єкта

### Опис

**ibase_blob_get**(resource `$blob_handle`, int `$len`): string

Функція повертає не більше `len` байт із BLOB-об'єкта, який був
відкритий для читання за допомогою
[ibase_blob_open()](function.ibase-blob-open.md).

> **Примітка**:
>
> Неможливо прочитати з BLOB-об'єкта, який був відкритий для запису з
> за допомогою [ibase_blob_create()](function.ibase-blob-create.md).

### Список параметрів

`blob_handle`
BLOB-об'єкт, відкритий за допомогою
[ibase_blob_open()](function.ibase-blob-open.md).

`len`
Розмір даних, що повертаються.

### Значення, що повертаються

Повертає не більше `len` байт з BLOB-об'єкта або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ibase_blob_get()****

` <?php$result    u003d ibase_query("SELECT blob_value FROM table");$data       u003d ibase_fetch_object($result);$blob_datau003du003dibase_blob_da> echo      ibase_blob_get($blob_hndl, $blob_data[0]);?> `

Хоча цей приклад робить не більше, ніж
'ibase_blob_echo($data-\>BLOB_VALUE)', він показує, як отримати
інформацію у $variable для подальших маніпуляцій.

### Дивіться також

- [ibase_blob_open()](function.ibase-blob-open.md) - Відкриває
BLOB-об'єкт для вилучення частин даних
- [ibase_blob_close()](function.ibase-blob-close.md) - Закриває
BLOB-об'єкт
- [ibase_blob_echo()](function.ibase-blob-echo.md) - Виводить
вміст BLOB-об'єкта у браузер
