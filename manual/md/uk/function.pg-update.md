- [« pg_untrace](function.pg-untrace.md)
- [pg_version »](function.pg-version.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Оновлення даних у таблиці

#pg_update

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

pg_update — Оновлення даних у таблиці

### Опис

**pg_update**(
[PgSql\Connection](class.pgsql-connection.md) `$connection`,
string `$table_name`,
array `$values`,
array `$conditions`,
int `$flags` u003d **`PGSQL_DML_EXEC`**
): string\|bool

**pg_update()** замінює записи в таблиці, що відповідають умовам
`conditions` даними `values`.

Якщо `flags` вказано, [pg_convert()](function.pg-convert.md)
застосовується до `values` із зазначеними прапорами.

За промовчанням **pg_update()** передає необроблені значення. Значення
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
Ім'я таблиці, де оновлюються записи.

`values`
Масив (array), ключі якого відповідають іменам колонок таблиці
`table_name`, а значення замінять дані у цих колонках.

`condition`
Масив (array), ключі якого відповідають іменам колонок таблиці
`table_name`. Будуть оновлені лише ті рядки, значення яких
співпадуть зі значеннями масиву.

`flags`
Одна з констант **`PGSQL_CONV_OPTS`**, **`PGSQL_DML_NO_CONV`**,
**`PGSQL_DML_ESCAPE`**, **`PGSQL_DML_EXEC`**, **`PGSQL_DML_ASYNC`** або
**`PGSQL_DML_STRING`**, або їх комбінація. Якщо `flags` містить
**`PGSQL_DML_STRING`**, функція поверне рядок. Якщо встановлено
**`PGSQL_DML_NO_CONV`** або **`PGSQL_DML_ESCAPE`**, то функція
[pg_convert()](function.pg-convert.md) внутрішньо не викликається.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Функція поверне рядок (string), якщо
константа **`PGSQL_DML_STRING`** міститься в `flags`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_update()****

`<?php $db u003d pg_connect('dbnameu003dfoo'); $datau003du003darray('field1'u003d>'AA', 'field2'u003d>'BB'); // Це безпечно в деякому ступеня, оскільки всі значення екрануються. // Однак PostgreSQL підтримує JSON/масив. Для цих значень це не безпечно за допомогою екранування, ні за допомогою підготовленого запиту. $res u003d pg_update($db, 'post_log', $_POST, $data); if ($res) {      echo "Дані оновлені: $res
";  } else {      echo "Має бути передані невірні дані
";  }?> `

### Дивіться також

- [pg_convert()](function.pg-convert.md) - Перетворює значення
асоціативного масиву прийнятні для використання в SQL-запитах
