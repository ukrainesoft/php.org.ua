- [« pg_send_query](function.pg-send-query.md)
- [pg_set_error_verbosity »](function.pg-set-error-verbosity.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Встановлює клієнтське кодування

#pg_set_client_encoding

(PHP 4 \>u003d 4.0.3, PHP 5, PHP 7, PHP 8)

pg_set_client_encoding — Встановлює клієнтське кодування

### Опис

**pg_set_client_encoding**([PgSql\Connection](class.pgsql-connection.md)
`$connection` u003d ?, string `$encoding`): int

**pg_set_client_encoding()** встановлює клієнтське кодування та
повертає 0 у разі успішного виконання, -1 у разі виникнення
помилки.

PostgreSQL автоматично конвертує дані з кодування бази даних у
кодування клієнтської програми.

> **Примітка**:
>
> Колишня назва функції: **pg_setclientencoding()**.

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

`encoding`
Необхідне клієнтське кодування. Список можливих значень: `SQL_ASCII`,
`EUC_JP`, `EUC_CN`, `EUC_KR`, `EUC_TW`, `UNICODE`, `MULE_INTERNAL`,
`LATINX` (Xu003d1...9), `KOI8`, `WIN`, `ALT`, `SJIS`, `BIG5` or `WIN1250`.

Список доступних кодувань залежить від версії PostgreSQL. Дивіться
документацію до вашої версії сервера.

### Значення, що повертаються

Повертає `0` у разі успішного виконання, або `-1` у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_set_client_encoding()****

` <?php$conn u003d pg_pconnect("dbnameu003dpublisher");if (!$conn) { echo "Відбулася помилка.
";  exit;}// Установка кодування в UNICODE. Дані будуть автоматично// перетворені із кодування в базі даних к клієнтської.pg_set_client_encoding($conn, $ authors");if(!$result) { echo "Відбулася помилка.
";  exit;}// Виводимо UTF-8 даніwhile ($row u003d pg_fetch_row($result)) {  echo "Author: $row[0]  E-mail: $row[1]";    
";}?> `

### Дивіться також

- [pg_client_encoding()](function.pg-client-encoding.md) - Отримання
кодування клієнта.
