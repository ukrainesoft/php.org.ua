- [«mysql_field_name](function.mysql-field-name.md)
- [mysql_field_table »](function.mysql-field-table.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Встановлює внутрішній покажчик результату на передане усунення
поля

# mysql_field_seek

(PHP 4, PHP 5)

mysql_field_seek — Встановлює внутрішній покажчик результату на
передане усунення поля

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_field_seek()](mysqli-result.field-seek.md)
- [PDOStatement::fetch()](pdostatement.fetch.md) з використанням
параметрів `cursor_orientation` та `offset`

### Опис

**mysql_field_seek**(resource `$result`, int `$field_offset`): bool

Переміщує покажчик до поля із зазначеним усуненням. Якщо наступний виклик
функції [mysql_fetch_field()](function.mysql-fetch-field.md)
містить зміщення, то буде повернено зміщення, що міститься в
**mysql_field_seek()**.

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

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [mysql_fetch_field()](function.mysql-fetch-field.md) - Повертає
інформацію про колонку з результату запиту як об'єкта
