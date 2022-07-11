- [« mysql_field_type](function.mysql-field-type.md)
- [mysql_get_client_info »](function.mysql-get-client-info.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Звільняє пам'ять від результату запиту

# mysql_free_result

(PHP 4, PHP 5)

mysql_free_result — Звільняє пам'ять від результату запиту

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_free_result()](mysqli-result.free.md)
- Присвоєння значення **`null`** змінної PDO об'єкта, або
[PDOStatement::closeCursor()](pdostatement.closecursor.md)

### Опис

**mysql_free_result**(resource `$result`): bool

**mysql_free_result()** звільнить всю пам'ять, яку займає результат,
на який посилається переданий дескриптор `result`.

**mysql_free_result()** потребує виклику тільки в тому випадку, якщо ви
всерйоз стурбовані тим, скільки пам'яті використовують ваші запити до БД,
що повертають велику кількість даних. Вся пам'ять, що використовується для
зберігання цих даних автоматично очиститься наприкінці роботи скрипта.

### Список параметрів

`result`
Оброблюваний [результат запита](language.types.resource.md). Цей
результат може бути отриманий за допомогою функції
[mysql_query()](function.mysql-query.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

Якщо як параметр 'result' передано не ресурс, то буде викликано
помилка рівня E_WARNING. Варто також зауважити, що
[mysql_query()](function.mysql-query.md) повертає resource тільки
для запитів SELECT, SHOW, EXPLAIN та DESCRIBE.

### Приклади

**Приклад #1 Приклад використання **mysql_free_result()****

` <?php$result u003d mysql_query("SELECT id,email FROM people WHERE id u003d '42'");if (!$result) {    echo 'Не удалося виконати запрос: . mysql_error(); exit;}/* Используем результат, подразумевая, что после этого он нам больше не нужен */$row u003d mysql_fetch_assoc($result);/* Теперь освобождаем результат и продолжаем дальнейшую работу над нашим скриптом */mysql_free_result($result);echo $row['id'];echo $row['email'];?> `

### Примітки

> **Примітка**:
>
> Для зворотної сумісності може бути використаний наступний застарілий
> псевдонім: **mysql_freeresult()**

### Дивіться також

- [mysql_query()](function.mysql-query.md) - Надсилає запит MySQL
- [is_resource()](function.is-resource.md) - Перевіряє, чи є
змінна ресурсом
