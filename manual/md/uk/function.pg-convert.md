- [« pg_consume_input](function.pg-consume-input.md)
- [pg_copy_from »](function.pg-copy-from.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Перетворює значення асоціативного масиву в прийнятні для
використання у SQL-запитах

#pg_convert

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

pg_convert — Перетворює значення асоціативного масиву на прийнятні
для використання у SQL-запитах

### Опис

**pg_convert**(
[PgSql\Connection](class.pgsql-connection.md) `$connection`,
string `$table_name`,
array `$values`,
int `$flags` u003d 0
): array\|false

**pg_convert()** перевіряє та перетворює значення з `values` в
прийнятні для SQL-сервера. Необхідно, щоб існувала таблиця
`table_name`, а кількість колонок у ній має бути не меншою, ніж
значень у масиві `values`. Імена колонок у таблиці `table_name` повинні
збігатися з ключами масиву `values`, типи даних значень масиву також
повинні співпадати з типами даних відповідних колонок. В разі
вдалої конвертації функція повертає масив перетворених значень,
інакше повертає **`false`**.

> **Примітка**:
>
> Булеві значення перетворюються на булев тип PostgreSQL. Рядкові
> уявлення булевого значення також підтримуються. **`null`**
> перетворюється на PostgreSQL NULL.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

`table_name`
Назва таблиці бази даних.

`values`
Дані перетворення.

`flags`
Одна з констант **`PGSQL_CONV_IGNORE_DEFAULT`**,
**`PGSQL_CONV_FORCE_NULL`** або **`PGSQL_CONV_IGNORE_NOT_NULL`**, або
їхня комбінація.

### Значення, що повертаються

Масив (array), що містить перетворені дані або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_convert()****

` <?php $dbconnu003du003dpg_connect('dbnameu003dfoo'); $tmp u003d array(     'author' u003d> 'Joe Thackery',      'year' u003d> 2005,      'title' u003d> 'y| $valsu003du003dpg_convert($dbconn,'authors',$tmp);?> `

### Дивіться також

- [pg_meta_data()](function.pg-meta-data.md) - Отримання метаданих
таблиці
- [pg_insert()](function.pg-insert.md) - Заносить дані з масиву в
таблицю бази даних
- [pg_select()](function.pg-select.md) - Вибирає записи з бази
даних
- [pg_update()](function.pg-update.md) - Оновлення даних у таблиці
- [pg_delete()](function.pg-delete.md) - Видаляє записи
