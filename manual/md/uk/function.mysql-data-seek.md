- [«mysql_create_db](function.mysql-create-db.md)
- [mysql_db_name »](function.mysql-db-name.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Переміщує внутрішній покажчик у результаті запиту

# mysql_data_seek

(PHP 4, PHP 5)

mysql_data_seek — Переміщує внутрішній покажчик у результаті запиту

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_data_seek()](mysqli-result.data-seek.md)
- **`PDO::FETCH_ORI_ABS`**

### Опис

**mysql_data_seek**(resource `$result`, int `$row_number`): bool

**mysql_data_seek()** переміщує внутрішній покажчик результату
запиту, з яким пов'язаний переданий дескриптор, до ряду із зазначеним
номером. Наступний дзвінок до функції отримання даних MySQL, такий як
[mysql_fetch_assoc()](function.mysql-fetch-assoc.md), поверне саме
його.

Нумерація `row_number` починається з 0. `row_number` має бути
значенням у діапазоні від 0 до
[mysql_num_rows()](function.mysql-num-rows.md) - 1. Однак, якщо
результат порожній ([mysql_num_rows()](function.mysql-num-rows.md) u003du003d 0),
то спроба зсуву покажчика до нульового ряду завершиться невдачею – буде
викликана помилка рівня **`E_WARNING`** та **mysql_data_seek()** поверне
**`false`**.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

`row_number`
Бажаний номер ряду в отриманому дескрипторі результату.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_data_seek()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . mysql_error());}$db_selected ');if(!$db_selected) {   die('Не вдалося вибрати базу даних: mysql_error());}$queryu003du003d'SELECT last_name, !$result) {    die('Помилка запиту: ' . mysql_error());}/* отримання рядів в зворотному порядку */for ($i u003d mysql_num_rows($result)> $$ $$  -) {    if (!mysql_data_seek($result, $i)) {       echo "Не удалося переміститися до ряду $i: " . mysql_error() . "
";        continue;    }    if (!($row u003d mysql_fetch_assoc($result))) {        continue;    }    echo $row['last_name'] . ' ' . $row['first_name'] . "<br />
";} mysql_free_result($result);?> `

### Примітки

> **Примітка**:
>
> Функція **mysql_data_seek()** може бути використана тільки з
> [mysql_query()](function.mysql-query.md), але не з
> [mysql_unbuffered_query()](function.mysql-unbuffered-query.md).

### Дивіться також

- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
- [mysql_num_rows()](function.mysql-num-rows.md) - Повертає
кількість рядів результату запиту
- [mysql_fetch_row()](function.mysql-fetch-row.md) - Обробляє
ряд результату запиту та повертає масив з числовими індексами
- [mysql_fetch_assoc()](function.mysql-fetch-assoc.md) - Повертає
ряд результату запиту як асоціативний масив
- [mysql_fetch_array()](function.mysql-fetch-array.md) -
Обробляє ряд результатів запиту, повертаючи асоціативний масив,
чисельний масив чи обидва
- [mysql_fetch_object()](function.mysql-fetch-object.md) -
Обробляє ряд результату запиту та повертає об'єкт
