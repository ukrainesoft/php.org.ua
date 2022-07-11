- [«cubrid_disconnect](function.cubrid-disconnect.md)
- [cubrid_error_code_facility
»](function.cubrid-error-code-facility.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Видалення екземпляра за OID

#cubrid_drop

(PECL CUBRID u003d 8.3.0)

cubrid_drop — Видалення екземпляра OID

### Опис

**cubrid_drop**(resource `$conn_identifier`, string `$oid`): bool

Функція **cubrid_drop()** використовується для видалення екземпляра з
бази даних, заданого його `oid`.

### Список параметрів

`conn_identifier`
Connection identifier.

`oid`
Oid екземпляра, який треба видалити.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_drop()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb");@cubrid_execute($conn, "DROP TABLE foo");cubrid_execute($conn, "CREATE TABLE foo   int), c list(int), d char(10))");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3}, {11) ,22,33,333}, 'a')");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(2, {4,5,7}, {44,55,66,666} , 'b')");$req u003d cubrid_execute($conn, "SELECT * FROM foo", CUBRID_INCLUDE_OID);cubrid_move_cursor($req, 1, CUBRID_CURSOR_FIRST)|| - Before Drop: ---
"); $attr u003d cubrid_get($conn, $oid);var_dump($attr);if (cubrid_drop($conn, $oid)) {    cubrid_commit($conn);} else {    ($req);$req u003d cubrid_execute($conn, "SELECT * FROM foo", CUBRID_INCLUDE_OID);cubrid_move_cursor($req, 1, CUBRID_CURSOR_FIRST);
--- After Drop: ---
");$attr u003d cubrid_get($conn, $oid);var_dump($attr);cubrid_close_request($req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

--- Before Drop: ---
array(4) {
["a"]u003d>
string(1) "1"
["b"]u003d>
array(3) {
[0]u003d>
string(1) "1"
[1]u003d>
string(1) "2"
[2]u003d>
string(1) "3"
}
["c"]u003d>
array(4) {
[0]u003d>
string(2) "11"
[1]u003d>
string(2) "22"
[2]u003d>
string(2) "33"
[3]u003d>
string(3) "333"
}
["d"]u003d>
string(10) "a"
}

--- After Drop: ---
array(4) {
["a"]u003d>
string(1) "2"
["b"]u003d>
array(3) {
[0]u003d>
string(1) "4"
[1]u003d>
string(1) "5"
[2]u003d>
string(1) "7"
}
["c"]u003d>
array(4) {
[0]u003d>
string(2) "44"
[1]u003d>
string(2) "55"
[2]u003d>
string(2) "66"
[3]u003d>
string(3) "666"
}
["d"]u003d>
string(10) "b"
}

### Дивіться також

- [cubrid_is_instance()](function.cubrid-is-instance.md) -
Перевіряє, чи існує екземпляр, на який вказує OID
