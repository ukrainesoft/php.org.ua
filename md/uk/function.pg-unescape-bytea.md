- [«pg_tty](function.pg-tty.md)
- [pg_untrace »](function.pg-untrace.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Забирає екранування двійкових даних типу bytea

#pg_unescape_bytea

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

pg_unescape_bytea — Забирає екранування двійкових даних типу bytea

### Опис

**pg_unescape_bytea**(string `$string`): string

**pg_unescape_bytea()** прибирає екранування спецсимволів у значеннях
типу PostgreSQL bytea. Повертає неекранований рядок, що містить
Двійкові дані.

> **Примітка**:
>
> При вибірці SQL функцією `SELECT` даних типу bytea PostgreSQL
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

`string`
Рядок (string), що містить дані типу PostgreSQL bytea і підлягає
перетворення на двійковий рядок PHP.

### Значення, що повертаються

Рядок (string) з неекранованими спецсимволами.

### Приклади

**Приклад #1 Приклад використання **pg_unescape_bytea()****

`<?php  // Підключення к базі даних $dbconn u003d pg_connect('dbnameu003dfoo'); // Отримання bytea даних $res u003d pg_query("SELECT data FROM gallery WHERE nameu003d'Pine trees'"); $rawu003d pg_fetch_result($res, 'data'); // Перетворення в двійковий формат і відправка в браузер header('Content-type:image/jpeg'); echo pg_unescape_bytea($raw);?> `

### Дивіться також

- [pg_escape_bytea()](function.pg-escape-bytea.md) - Екранує
спецсимволи в рядку для вставки в поле типу bytea
- [pg_escape_string()](function.pg-escape-string.md) - Екранування
спецсимволів у рядку запиту
