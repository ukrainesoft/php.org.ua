- [« pg_free_result](function.pg-free-result.md)
- [pg_get_pid »](function.pg-get-pid.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Отримання SQL NOTIFY повідомлення

#pg_get_notify

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

pg_get_notify — Отримання SQL NOTIFY повідомлення

### Опис

**pg_get_notify**([PgSql\Connection](class.pgsql-connection.md)
`$connection`, int `$mode` u003d **`PGSQL_ASSOC`**): array\|false

**pg_get_notify()** отримує повідомлення, згенеровані командою SQL
`NOTIFY`. Для отримання повідомлень використовуйте команду SQL `LISTEN`.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

`mode`
Необов'язковий аргумент, що вказує, яким чином повертається масив
(array) буде проіндексований. `mode` - константа, і може приймати
наступні значення: **`PGSQL_ASSOC`**, **`PGSQL_NUM`** або
**`PGSQL_BOTH`**. При передачі **`PGSQL_ASSOC`** функція
**pg_get_notify()** поверне асоціативний масив, при передачі
**`PGSQL_NUM`** - чисельно індексований, у разі **`PGSQL_BOTH`**
(за замовчуванням) буде повернено обидва масиви.

### Значення, що повертаються

Масив (array), що містить повідомлення `NOTIFY` та PID сервера БД. Якщо
підтримується сервером, масив також містить версію сервера та корисну
навантаження. Якщо жодних повідомлень не очікується, функція поверне
**`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Повідомлення PostgreSQL NOTIFY**

` <?php$conn u003d pg_pconnect("dbnameu003dpublisher");if (!$conn) { echo "Відбулася помилка.
";  exit;}// Слухаємо повідомлення 'author_updated' з іншого процесуpg_query($conn, 'LISTEN author_updated;');$notify u003d pg_get_notify($conn);     
";} else {  print_r($notify);}?> `

### Дивіться також

- [pg_get_pid()](function.pg-get-pid.md) - Отримує ID процесу
сервера БД
