- [«cubrid_client_encoding](function.cubrid-client-encoding.md)
- [cubrid_data_seek »](function.cubrid-data-seek.md)

- [PHP Manual](index.md)
- [Функції сумісності CUBRID MySQL](cubridmysql.cubrid.md)
- Закриває з'єднання з базою даних

#cubrid_close

(PECL CUBRID u003d 8.3.1)

cubrid_close — Закриває з'єднання з базою даних

### Опис

**cubrid_close**(resource `$conn_identifier` u003d ?): bool

Функція **cubrid_close()** використовується для закриття обробника
з'єднання та від'єднання від сервера. Якщо будь-який обробник запиту
не буде закрито до цього моменту, його буде примусово закрито. Функція
аналогічна функції CUBRID
[cubrid_disconnect()](function.cubrid-disconnect.md).

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання. Якщо не задано, то буде використано
останнє відкрите за допомогою
[cubrid_connect()](function.cubrid-connect.md) з'єднання.

### Значення, що повертаються

**`true`**, у разі успішного виконання.

**`false`**, у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_close()****

` <?php$con u003d cubrid_connect ("localhost", 33000, "demodb");if ($con) {  echo "підключення успішно виконано"; $req u003d cubrid_execute ( $con, "insert into person values(1,'James')"); if ($req) {      cubrid_close_request ($req); cubrid_commit ($ con); } else {      cubrid_rollback ($con); }  cubrid_close ($con);}?> `

### Дивіться також

- [cubrid_disconnect()](function.cubrid-disconnect.md) - Закриває
з'єднання з базою даних
- [cubrid_connect()](function.cubrid-connect.md) - Відкриває
з'єднання з сервером CUBRID
- [cubrid_connect_with_url()](function.cubrid-connect-with-url.md) -
Створює оточення для з'єднання із сервером CUBRID
