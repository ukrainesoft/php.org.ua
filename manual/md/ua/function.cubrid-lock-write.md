- [«cubrid_lock_read](function.cubrid-lock-read.md)
- [cubrid_move_cursor »](function.cubrid-move-cursor.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Встановлює блокування запису для цього OID

#cubrid_lock_write

(PECL CUBRID u003d 8.3.0)

cubrid_lock_write — Встановлює блокування запису для цього OID

### Опис

**cubrid_lock_write**(resource `$conn_identifier`, string `$oid`): bool

Функція **cubrid_lock_write()** використовується для встановлення блокування
записи екземпляра, на який вказує цей `oid`.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`oid`
OID екземпляра, на який необхідно встановити блокування запису.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_lock_write()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");@cubrid_execute($conn, "DROP TABLE foo");cubrid_execute($conn, CREATE , b set(int), c list(int), d char(10))");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3 }, {11,22,33,333}, 'a')");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(2, {4,5,7}, {44, 55,66,666}, 'b')"); ($conn, $oid);$attr u003d cubrid_col_get($conn, $oid, "b");var_dump($attr);cubrid_put($conn, $oid, "b", array(2, 4, 8) );$attr u003d cubrid_col_get($conn, $oid, "b");var_dump($attr);cubrid_close_request($req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
string(1) "1"
[1]u003d>
string(1) "2"
[2]u003d>
string(1) "3"
}
array(3) {
[0]u003d>
string(1) "2"
[1]u003d>
string(1) "4"
[2]u003d>
string(1) "8"
}

### Дивіться також

- [cubrid_lock_read()](function.cubrid-lock-read.md) - Встановлює
блокування читання для цього OID
