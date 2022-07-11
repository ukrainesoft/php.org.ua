- [«pg_host](function.pg-host.md)
- [pg_last_error »](function.pg-last-error.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Заносить дані з масиву до таблиці бази даних

#pg_insert

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

pg_insert — Заносить дані з масиву до таблиці бази даних

### Опис

**pg_insert**(
[PgSql\Connection](class.pgsql-connection.md) `$connection`,
string `$table_name`,
array `$values`,
int `$flags` u003d **`PGSQL_DML_EXEC`**
): [PgSql\Result](class.pgsql-result.md)\|string\|bool

**pg_insert()** вставляє записи з масиву `values` у таблицю
`table_name`.

Якщо `flags` вказано, [pg_convert()](function.pg-convert.md)
застосовується до `values` із зазначеними прапорами.

За промовчанням **pg_insert()** передає необроблені значення. Значення
повинні бути екрановані або опція **`PGSQL_DML_ESCAPE`** має бути
вказано. **`PGSQL_DML_ESCAPE`** укладає в лапки та екранує
параметри/ідентифікатори. Тому імена таблиць/стовпців стають
чутливими до регістру.

Зверніть увагу, що ні екранування, ні підготовлений запит не
захистять запит LIKE, JSON, масив, регулярні вирази тощо.
параметри повинні оброблятися відповідно до їх контекстів, тобто.
слід екранувати/перевіряти значення.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

`table_name`
Ім'я таблиці для вставлення даних. Кількість колонок у таблиці
`table_name` має бути не менше, ніж елементів у масиві `values`.

`values`
Асоціативний масив(array), у якому ключі є назвами колонок
таблиці `table_name`, а значення - записи, які необхідно вставити у
ці колонки.

`flags`
Комбінація констант **`PGSQL_CONV_OPTS`**, **`PGSQL_DML_NO_CONV`**,
**`PGSQL_DML_ESCAPE`**, **`PGSQL_DML_EXEC`**, **`PGSQL_DML_ASYNC`** та
**`PGSQL_DML_STRING`**. Якщо серед інших передається
**`PGSQL_DML_STRING`** у параметрі `flags`, функція поверне рядок
запиту. Якщо встановлено **`PGSQL_DML_NO_CONV`** або
**`PGSQL_DML_ESCAPE`**, то функція
[pg_convert()](function.pg-convert.md) внутрішньо не викликається.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.. Або повертає рядок(string), якщо
**`PGSQL_DML_STRING`** включено до списку параметрів аргументу `flags`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Повертає екземпляр [PgSql\Result](class.pgsql-result.md); раніше повертався ресурс ([resource](language.types.resource.md)). |
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_insert()****

` <?php $dbconnu003du003dpg_connect('dbnameu003dfoo'); // Це безпечно в деякому ступеня, оскільки всі значення екрануються. // Однак PostgreSQL підтримує JSON/масив. Для цих значень це не безпечно за допомогою екранування, ні за допомогою підготовленого запиту. $res u003d pg_insert($dbconn, 'post_log', $_POST); if ($res) {      echo "Дані із POST успішно внесені в журнал
";  } else {      echo "Користувач направив невірні дані
";  }?> `

### Дивіться також

- [pg_convert()](function.pg-convert.md) - Перетворює значення
асоціативного масиву прийнятні для використання в SQL-запитах
