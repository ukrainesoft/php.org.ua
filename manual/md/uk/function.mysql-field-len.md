- [«mysql_field_flags](function.mysql-field-flags.md)
- [mysql_field_name »](function.mysql-field-name.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає довжину вказаного поля

# mysql_field_len

(PHP 4, PHP 5)

mysql_field_len — Повертає довжину вказаного поля

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_field_direct()](mysqli-result.fetch-field-direct.md)
\[length\]
- [PDOStatement::getColumnMeta()](pdostatement.getcolumnmeta.md)
\[len\]

### Опис

**mysql_field_len**(resource `$result`, int `$field_offset`): int\|false

**mysql_field_len()** повертає довжину вказаного поля.

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

Довжина зазначеного поля у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_field_len()****

` <?php$result u003d mysql_query("SELECT id,email FROM people WHERE id u003d '42'");if (!$result) {    echo 'Не удалося виконати запрос: . mysql_error(); exit;}// Отримає довжину поля id так, вказано в структурі бази даних$length u003d mysql_field_len($result, 0);echo $length;?> `

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_fieldlen()**

### Дивіться також

- [mysql_fetch_lengths()](function.mysql-fetch-lengths.md) -
Повертає довжину кожного поля в результаті
- [strlen()](function.strlen.md) - Повертає довжину рядка
