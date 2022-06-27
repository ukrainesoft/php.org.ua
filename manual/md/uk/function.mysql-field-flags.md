- [«mysql_fetch_row](function.mysql-fetch-row.md)
- [mysql_field_len »] (function.mysql-field-len.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає прапори, пов'язані із зазначеним полем результату запиту

# mysql_field_flags

(PHP 4, PHP 5)

mysql_field_flags — Повертає прапори, пов'язані із зазначеним полем
результату запиту

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_field_direct()](mysqli-result.fetch-field-direct.md)
\[flags\]
- [PDOStatement::getColumnMeta()](pdostatement.getcolumnmeta.md)
\[flags\]

### Опис

**mysql_field_flags**(resource `$result`, int `$field_offset`):
string\|false

**mysql_field_flags()** повертає прапори, пов'язані із зазначеним полем.
Кожен прапор повертається як окреме слово, відокремлене від попереднього
пробілом. Отримане значення можна розбити на масив, використовуючи функцію
[explode()](function.explode.md).

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

`field_offset`
Числове усунення поля. `field_offset` починається з `0`. Якщо
`field_offset` не існує, генерується помилка рівня
**`E_WARNING`**.

### Значення, що повертаються

Повертає рядок з прапорами, пов'язаними з результатом або **`false`**
у разі виникнення помилки.

Повертаються такі прапори, якщо ваша версія MySQL їх вже
підтримує: ``not_null'`, ``primary_key'', ``unique_key'',
``multiple_key'`, ``blob'`, ``unsigned'`, ``zerofill'', ``binary"`,
"enum", "auto_increment" і "timestamp".

### Приклади

**Приклад #1 Приклад використання **mysql_field_flags()****

` <?php$result u003d mysql_query("SELECT id,email FROM people WHERE id u003d '42'");if (!$result) {    echo 'Помилка в запиті:  | mysql_error(); exit;}$flags u003d mysql_field_flags($result, 0);echo $flags;print_r(explode(' ', $flags));?> `

Результатом виконання цього прикладу буде щось подібне:

not_null primary_key auto_increment
Array
(
[0] u003d> not_null
[1] u003d> primary_key
[2] u003d> auto_increment
)

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_fieldflags()**

### Дивіться також

- [mysql_field_type()](function.mysql-field-type.md) - Повертає
тип вказаного поля з результату запиту
- [mysql_field_len()](function.mysql-field-len.md) - Повертає
довжину вказаного поля
