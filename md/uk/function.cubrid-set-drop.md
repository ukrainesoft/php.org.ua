- [«cubrid_set_db_parameter](function.cubrid-set-db-parameter.md)
- [cubrid_set_query_timeout »](function.cubrid-set-query-timeout.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Видаляє елемент із стовпця заданого типу, використовуючи OID

#cubrid_set_drop

(PECL CUBRID u003d 8.3.0)

cubrid_set_drop — Видаляє елемент із стовпця заданого типу, використовуючи
OID

### Опис

**cubrid_set_drop**(
resource `$conn_identifier`,
string `$oid`,
string `$attr_name`,
string `$set_element`
): bool

Функція **cubrid_set_drop()** використовується для видалення елемента,
який ви запитуєте із заданого атрибута типу набору (set,
multiset) бази даних.

### Список параметрів

`conn_identifier`
Connection identifier.

`oid`
OID екземпляра, з яким ви хочете працювати.

`attr_name`
Ім'я атрибута, з якого ви бажаєте видалити елемент.

`set_element`
Вміст елемента, який ви бажаєте видалити.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_set_drop()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");@cubrid_execute($conn, "DROP TABLE foo");cubrid_execute($conn, CREATE , b set(int), c list(int), d char(10))");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3 }, {11,22,33,333}, 'a')");$req u003d cubrid_execute($conn, "SELECT * FROM foo", CUBRID_INCLUDE_OID);cubrid_move_cursor($Rq; $req);$attr u003d cubrid_col_get($conn, $oid, "b");var_dump($attr);cubrid_set_drop($conn, $oid, "b", "1");$attr u003d cubrid_col_get($ , $oid, "b");var_dump($attr);cubrid_close_request($req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
string(1) "1"
[1]u003d>
string(1) "2"
[2]u003d>
string(1) "3"
}
array(2) {
[0]u003d>
string(1) "2"
[1]u003d>
string(1) "3"
}

### Дивіться також

- [cubrid_set_add()](function.cubrid-set-add.md) - Вставляє один
елемент для встановлення стовпця типу за допомогою OID
