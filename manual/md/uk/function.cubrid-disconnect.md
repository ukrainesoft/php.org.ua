- [«cubrid_current_oid](function.cubrid-current-oid.md)
- [cubrid_drop »] (function.cubrid-drop.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Закриває з'єднання з базою даних

#cubrid_disconnect

(PECL CUBRID u003d 8.3.0)

cubrid_disconnect — Закриває з'єднання з базою даних

### Опис

**cubrid_disconnect**(resource `$conn_identifier` u003d ?): bool

Функція **cubrid_disconnect()** використовується для закриття обробника
з'єднання та від'єднання від сервера. Якщо якийсь обробник запиту
не буде закрито до цього моменту, його буде примусово закрито. Функція
аналогічна функції сумісності CUBRID MySQL
[cubrid_close()](function.cubrid-close.md).

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_disconnect()****

` <?php$con u003d cubrid_connect ("localhost", 33000, "demodb");if ($con) {   echo "connected successfully"; $req u003d cubrid_execute( $con, "create table person(id int,name char(10))"); if ($req) {      cubrid_close_request($req); cubrid_commit($con); } else {      cubrid_rollback($con); }   $req u003d cubrid_execute( $con, "insert into person values(1,'James')"); if ($req) {      cubrid_close_request($req); cubrid_commit($con); } else {      cubrid_rollback($con); }   cubrid_disconnect($con);}?> `

### Дивіться також

- [cubrid_close()](function.cubrid-close.md) - Закриває з'єднання
з базою даних
- [cubrid_connect()](function.cubrid-connect.md) - Відкриває
з'єднання з сервером CUBRID
- [cubrid_connect_with_url()](function.cubrid-connect-with-url.md) -
Створює оточення для з'єднання із сервером CUBRID
