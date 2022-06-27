- [«cubrid_lob2_write](function.cubrid-lob2-write.md)
- [cubrid_lock_write »](function.cubrid-lock-write.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Встановлює блокування читання для цього OID

#cubrid_lock_read

(PECL CUBRID u003d 8.3.0)

cubrid_lock_read — Встановлює блокування читання для цього OID

### Опис

**cubrid_lock_read**(resource `$conn_identifier`, string `$oid`): bool

Функція **cubrid_lock_read()** використовується для встановлення блокування
читання екземпляра, на який вказує цей `oid`.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`oid`
OID екземпляра, на який необхідно встановити блокування читання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_lock_read()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");@cubrid_execute($conn, "DROP TABLE foo");cubrid_execute($conn, CREATE , b set(int), c list(int), d char(10))");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3 }, {11,22,33,333}, 'a')");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(2, {4,5,7}, {44, 55,66,666}, 'b')"); ($conn, $oid);$attr u003d cubrid_get($conn, $oid, "b");var_dump($attr);$attr u003d cubrid_get($conn, $oid);var_dump($attr);cubrid_close_request $req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

string(9) "{1, 2, 3}"
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

### Дивіться також

- [cubrid_lock_write()](function.cubrid-lock-write.md) -
Встановлює блокування запису для цього OID
