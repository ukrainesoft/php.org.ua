- [« mysql_fetch_array](function.mysql-fetch-array.md)
- [mysql_fetch_field »](function.mysql-fetch-field.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає ряд результату запиту як асоціативний масив.

# mysql_fetch_assoc

(PHP 4 u003d 4.0.3, PHP 5)

mysql_fetch_assoc — Повертає ряд результату запиту як
асоціативного масиву

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_fetch_assoc()](mysqli-result.fetch-assoc.md)
- [PDOStatement::fetch(PDO::FETCH_ASSOC)](pdostatement.fetch.md)

### Опис

**mysql_fetch_assoc**(resource `$result`): array

Повертає асоціативний масив, що відповідає отриманому ряду та
зсуває вперед внутрішній покажчик результату. Функція
**mysql_fetch_assoc()** аналогічна виклику функції
[mysql_fetch_array()](function.mysql-fetch-array.md) з другим
необов'язковим параметром, що дорівнює MYSQL_ASSOC. Функція повертає лише
асоціативний масив.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

### Значення, що повертаються

Повертає асоціативний масив рядків, що відповідає отриманому ряду,
або **`false`** якщо рядів більше немає.

Якщо два або більше стовпців результату мають однакові імена, пріоритет
матиме останній стовпець. Для доступу до іншого однойменного
стовпцю (або стовпцям), вам необхідно або звернутися до результату
запиту за числовим індексом за допомогою
[mysql_fetch_row()](function.mysql-fetch-row.md) або додати
псевдоніми до потрібних стовпців. Для більш докладної інформації про
псевдонімах дивіться опис прикладу
[mysql_fetch_array()](function.mysql-fetch-array.md).

### Приклади

**Приклад #1 Розширений приклад використання **mysql_fetch_assoc()****

` <?php$conn u003d mysql_connect("localhost", "mysql_user", "mysql_password");if (!$conn) {    echo "Unable to connect to DB: " . mysql_error(); exit;}if(!mysql_select_db("mydbname")) {   echo "Unable to select mydbname: " . mysql_error(); exit;}$sql u003d "SELECT id as userid, fullname, userstatus        FROM   sometable        WHERE  userstatus u003d 1";$result u003d mysql_query($sql);if (!$result) {    echo "Could not successfully run query ($sql) from DB: " . mysql_error(); exit;}if(mysql_num_rows($result) u003du003d 0) {    echo "No rows found, nothing to print so am exiting"; exit;}// До тих пор, поки в результаті містяться ряди, поміщаємо их в асоціативний масив.// Зауваження: якщо запит повертає тільки один    | в початок цикла, ви зробите//             доступними змінні $userid, $fullname і $userstatuswhile ($row u003d mysql_fetch_assoc$   echo $row["fullname"]; echo $row["userstatus"];}mysql_free_result($result);?> `

### Примітки

> **Примітка**: **Продуктивність**
>
> Важливо, що **mysql_fetch_assoc()** лише *незначно*
> повільніше, ніж [mysql_fetch_row()](function.mysql-fetch-row.md), але
> водночас надає важливу додаткову інформацію.

> **Примітка**: Імена полів, що повертаються цією функцією,
> *залежними від регістру*.

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

### Дивіться також

- [mysql_fetch_row()](function.mysql-fetch-row.md) - Обробляє
ряд результату запиту та повертає масив з числовими індексами
- [mysql_fetch_array()](function.mysql-fetch-array.md) -
Обробляє ряд результатів запиту, повертаючи асоціативний масив,
чисельний масив чи обидва
- [mysql_data_seek()](function.mysql-data-seek.md) - Переміщує
внутрішній покажчик в результаті запиту
- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
- [mysql_error()](function.mysql-error.md) - Повертає текст помилки
останньої операції з MySQL
