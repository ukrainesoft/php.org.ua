- [« mysql_fetch_lengths](function.mysql-fetch-lengths.md)
- [mysql_fetch_row »](function.mysql-fetch-row.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- обробляє ряд результату запиту та повертає об'єкт

# mysql_fetch_object

(PHP 4, PHP 5)

mysql_fetch_object — Обробляє ряд результатів запиту і повертає
об'єкт

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_object()](mysqli-result.fetch-object.md)
- [PDOStatement::fetch(PDO::FETCH_OBJ)](pdostatement.fetch.md)

### Опис

**mysql_fetch_object**(resource `$result`, string `$class_name` u003d ?,
array `$params` u003d ?): object

Повертає об'єкт з властивостями, відповідними колонкам в
обробленому ряду та зсуває внутрішній покажчик результату вперед.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

`class_name`
Назва класу. Буде створено екземпляр вказаного класу, заповнено
властивостями та повернутий. Якщо не вказано, повертається екземпляр
**stdClass**.

`params`
Необов'язковий масив (array) параметрів, що передаються в конструктор
створюваного екземпляра `class_name`.

### Значення, що повертаються

Повертає об'єкт (object) з рядковими властивостями, що відповідають
отриманому ряду, або 'false', якщо рядів більше немає.

### Приклади

**Приклад #1 Приклад використання **mysql_fetch_object()****

` <?phpmysql_connect("hostname", "user", "password");mysql_select_db("mydb");$result u003d mysql_query("select * from mytable");while ($row u003d mysql_fetch_object($result)) echo $row->user_id; echo $row->fullname;}mysql_free_result($result);?> `

**Приклад #2 Приклад використання **mysql_fetch_object()****

` <?phpclass foo {   public $name;}mysql_connect("hostname", "user", "password");mysql_select_db("mydb");$result u003d Mysql_query("select name from mytable li$| u003d mysql_fetch_object($result, 'foo');var_dump($obj);?> `

### Примітки

> **Примітка**: **Продуктивність**
>
> У плані швидкості ця функція аналогічна
> [mysql_fetch_array()](function.mysql-fetch-array.md) і майже також
> швидка, як [mysql_fetch_row()](function.mysql-fetch-row.md)
> (Різниця незначна).

> **Примітка**:
>
> **mysql_fetch_object()** працює аналогічно
> [mysql_fetch_array()](function.mysql-fetch-array.md), з єдиним
> Відмінність - функція повертає об'єкт замість масиву. Це, крім усього
> іншого означає, що ви зможете працювати з полями тільки на ім'я
> колонок, а чи не індексів (числа неможливо знайти властивостями об'єкта).

> **Примітка**: Імена полів, що повертаються цією функцією,
> *залежними від регістру*.

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

### Дивіться також

- [mysql_fetch_array()](function.mysql-fetch-array.md) -
Обробляє ряд результатів запиту, повертаючи асоціативний масив,
чисельний масив чи обидва
- [mysql_fetch_assoc()](function.mysql-fetch-assoc.md) - Повертає
ряд результату запиту як асоціативний масив
- [mysql_fetch_row()](function.mysql-fetch-row.md) - Обробляє
ряд результату запиту та повертає масив з числовими індексами
- [mysql_data_seek()](function.mysql-data-seek.md) - Переміщує
внутрішній покажчик в результаті запиту
- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
