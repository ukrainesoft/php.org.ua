- [«mysql_escape_string](function.mysql-escape-string.md)
- [mysql_fetch_assoc »](function.mysql-fetch-assoc.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- обробляє ряд результатів запиту, повертаючи асоціативний масив,
чисельний масив чи обидва

# mysql_fetch_array

(PHP 4, PHP 5)

mysql_fetch_array — Обробляє ряд результатів запиту, повертаючи
асоціативний масив, чисельний масив або обидва

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_array()](mysqli-result.fetch-array.md)
- [PDOStatement::fetch()](pdostatement.fetch.md)

### Опис

**mysql_fetch_array**(resource `$result`, int `$result_type` u003d
MYSQL_BOTH): array

Повертає масив, що відповідає обробленому ряду результату запиту
і зсуває внутрішній покажчик даних уперед.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

`result_type`
Тип масиву, що повертається. Є константою і може приймати
наступні значення: **`MYSQL_ASSOC`**, **`MYSQL_NUM`** та
**`MYSQL_BOTH`**.

### Значення, що повертаються

Повертає масив рядків, що відповідають обробленому ряду результату
запиту, або **`false`**, якщо рядів більше немає. Тип повертається
масиву залежить від значення параметра `result_type`. При використанні
**`MYSQL_BOTH`** (за замовчуванням), ви отримаєте масив, що складається як з
асоціативних індексів, і з чисельних. **`MYSQL_ASSOC`** поверне
лише асоціативні індекси (аналогічно функції
[mysql_fetch_assoc()](function.mysql-fetch-assoc.md)), а
**`MYSQL_NUM`** - лише чисельні (аналогічно функції
[mysql_fetch_row()](function.mysql-fetch-row.md)).

Якщо кілька колонок в результаті матимуть однакові назви, то
буде повернуто останню колонку. Щоб отримати доступ до інших
колонкам з тим же ім'ям, використовуйте чисельні індекси масиву або
псевдоніми у запиті. У разі псевдонімів використовуйте саме їх – ви не
Ви можете використовувати справжні імена колонок.

### Приклади

**Приклад #1 Запит із застосуванням псевдонімів для імен, що дублюються.
колонок**

`` sqlcode
SELECT table1.field AS foo, table2.field AS bar FROM table1, table2
````

**Приклад #2 **mysql_fetch_array()** з **`MYSQL_NUM`****

`<?phpmysql_connect("localhost", "mysql_user", "mysql_password") or    die("Помилка з'єднання: " . mysql_error());mysql_select_db("mydb");$result u003d mysql  ");while ($row u003d mysql_fetch_array($result, MYSQL_NUM)) {    printf("ID: %s  Ім'я: %s", $row[0], $row[1]);}mysql_free_result ?> `

**Приклад #3 **mysql_fetch_array()** з **`MYSQL_ASSOC`****

`<?phpmysql_connect("localhost", "mysql_user", "mysql_password") or    die("Помилка з'єднання: " . mysql_error());mysql_select_db("mydb");$result u003d mysql  ");while ($row u003d mysql_fetch_array($result, MYSQL_ASSOC)) {    printf("ID: %s  Ім'я: %s", $row["id"], $row["name"]);}my__ $result);?> `

**Приклад #4 **mysql_fetch_array()** з **`MYSQL_BOTH`****

`<?phpmysql_connect("localhost", "mysql_user", "mysql_password") or    die("Помилка з'єднання: " . mysql_error());mysql_select_db("mydb");$result u003d mysql  ");while($row u003d mysql_fetch_array($result, MYSQL_BOTH)) {    printf ("ID: %s  Ім'я: %s", $row[0], $row["name"]);}my$_result );?> `

### Примітки

> **Примітка**: **Продуктивність**
>
> Важливо, що **mysql_fetch_array()** працює *незначно*
> повільніше, ніж [mysql_fetch_row()](function.mysql-fetch-row.md),
> водночас надаючи набагато більш зручний доступ до даних.

> **Примітка**: Імена полів, що повертаються цією функцією,
> *залежними від регістру*.

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

### Дивіться також

- [mysql_fetch_row()](function.mysql-fetch-row.md) - Обробляє
ряд результату запиту та повертає масив з числовими індексами
- [mysql_fetch_assoc()](function.mysql-fetch-assoc.md) - Повертає
ряд результату запиту як асоціативний масив
- [mysql_data_seek()](function.mysql-data-seek.md) - Переміщує
внутрішній покажчик в результаті запиту
- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
