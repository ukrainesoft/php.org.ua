- [«mysql_fetch_object](function.mysql-fetch-object.md)
- [mysql_field_flags »](function.mysql-field-flags.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- обробляє ряд результату запиту та повертає масив з числовими
індексами

# mysql_fetch_row

(PHP 4, PHP 5)

mysql_fetch_row — Обробляє ряд результатів запиту і повертає
масив із числовими індексами

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_row()](mysqli-result.fetch-row.md)
- [PDOStatement::fetch(PDO::FETCH_NUM)](pdostatement.fetch.md)

### Опис

**mysql_fetch_row**(resource `$result`): array

Повертає масив з числовими індексами, що містить дані обробленого
ряду, і зсуває внутрішній покажчик результату вперед.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

### Значення, що повертаються

Повертає масив рядків з числовими індексами, що містить дані
обробленого ряду, або "false", якщо рядів не залишилося.

**mysql_fetch_row()** обробляє один ряд результату, на який
посилається переданий покажчик. Ряд повертається як масиву. Кожна
колонка розташовується в наступному осередку масиву, починаючи з нульового
індексу

### Приклади

**Приклад #1 Отримання одного ряду за допомогою **mysql_fetch_row()****

` <?php$result u003d mysql_query("SELECT id,email FROM people WHERE id u003d '42'");if (!$result) {    echo 'Помилка запиту: ' . mysql_error(); exit;}$row u003d mysql_fetch_row($result);echo $row[0]; // 42echo $row[1]; // email?> `

### Примітки

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

### Дивіться також

- [mysql_fetch_array()](function.mysql-fetch-array.md) -
Обробляє ряд результатів запиту, повертаючи асоціативний масив,
чисельний масив чи обидва
- [mysql_fetch_assoc()](function.mysql-fetch-assoc.md) - Повертає
ряд результату запиту як асоціативний масив
- [mysql_fetch_object()](function.mysql-fetch-object.md) -
Обробляє ряд результату запиту та повертає об'єкт
- [mysql_data_seek()](function.mysql-data-seek.md) - Переміщує
внутрішній покажчик в результаті запиту
- [mysql_fetch_lengths()](function.mysql-fetch-lengths.md) -
Повертає довжину кожного поля в результаті
- [mysql_result()](function.mysql-result.md) - Повертає дані
результату запиту
