- [«pg_end_copy](function.pg-end-copy.md)
- [pg_escape_identifier »](function.pg-escape-identifier.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Екранує спецсимволи у рядку для вставки у поле типу bytea

#pg_escape_bytea

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_escape_bytea - Екранує спецсимволи в рядку для вставки в поле
типу bytea

### Опис

**pg_escape_bytea**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, string `$data`): string

**pg_escape_bytea()** екранує спецсимволи в рядку з даними типу
bytea. Повертає екранований рядок.

> **Примітка**:
>
> При вибірці SQL-функцією `SELECT` даних типу bytea PostgreSQL
> повертає значення у вісімковій системі числення з префіксом '\'
> (такі як). Користувачеві необхідно вручну перетворювати їх на
> Двійковий формат.
>
> Функція підтримується PostgreSQL версії 7.2 та вище. Для версій 7.2.0
> і 7.2.1 значення мають бути перетворені на тип bytea, коли
> увімкнено мультибайтову підтримку. Тоді як
> `INSERT INTO test_table (image)VALUES ('$image_escaped'::bytea);` в
> PostgreSQL 7.2.2 і вище не потребує будь-яких перетворень.
> Виняток становить випадок, коли клієнтське (frontend) кодування не
> відповідає серверної (backend). При цьому виникає помилка
> мультибайтового потоку, і користувач повинен привести дані до типу
> bytea, щоб її уникнути.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md). Якщо
`connection` не вказано, використовується стандартне з'єднання.
З'єднання за замовчуванням - це останнє з'єднання, виконане з
за допомогою функцій [pg_connect()](function.pg-connect.md) або
[pg_pconnect()](function.pg-pconnect.md).

**Увага**
Починаючи з версії PHP 8.1.0, використання стандартного з'єднання
застаріло.

`data`
Рядок, що містить двійкові дані у вигляді тексту, який потрібно
помістити у полі типу bytea.

### Значення, що повертаються

Повертає рядок, де екрановані всі необхідні символи.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_escape_bytea()****

`<?php  // Підключення к базі даних $dbconn u003d pg_connect('dbnameu003dfoo'); // Читання бінарного файлу  $data u003d file_get_contents('image1.jpg'); // Екранування спецсимволів у рядку з двійковими даними  $escaped u003d pg_escape_bytea($data); // Вставка в таблицю бази даних  pg_query("INSERT INTO gallery (name, data) VALUES ('Pine trees', '{$escaped}')");?> `

### Дивіться також

- [pg_unescape_bytea()](function.pg-unescape-bytea.md) - Забирає
екранування двійкових даних типу bytea
- [pg_escape_string()](function.pg-escape-string.md) - Екранування
спецсимволів у рядку запиту
