- [«cubrid_seq_drop](function.cubrid-seq-drop.md)
- [cubrid_seq_put »](function.cubrid-seq-put.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Вставляє елемент у стовпець типу послідовності, використовуючи OID

#cubrid_seq_insert

(PECL CUBRID u003d 8.3.0)

cubrid_seq_insert — Вставляє елемент у стовпець типу послідовності,
використовуючи OID

### Опис

**cubrid_seq_insert**(
resource `$conn_identifier`,
string `$oid`,
string `$attr_name`,
int `$index`,
string `$seq_element`
): bool

Функція **cubrid_col_insert()** використовується для вставки елемента в
атрибут типу послідовності у запитаному місці.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`oid`
OID екземпляра, з яким ви хочете працювати.

`attr_name`
Ім'я атрибута, до якого ви хочете вставити екземпляр.

`index`
Розташування елемента, в який ви хочете вставити елемент (починаючи з
1).

`seq_element`
Вміст елемента, який ви бажаєте вставити.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_seq_insert()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");@cubrid_execute($conn, "DROP TABLE foo");cubrid_execute($conn, CREATE , b set(int), c sequence(int), d char(10))");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3) }, {11,22,33,333}, 'a')");$req u003d cubrid_execute($conn, "SELECT * FROM foo", CUBRID_INCLUDE_OID);cubrid_move_cursor($Rq; $req);$attr u003d cubrid_col_get($conn, $oid, "c");var_dump($attr);cubrid_seq_insert($conn, $oid, "c", 5, "44");$attr u003d cubrid $conn, $oid, "c");var_dump($attr);cubrid_close_request($req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

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
array(5) {
[0]u003d>
string(2) "11"
[1]u003d>
string(2) "22"
[2]u003d>
string(2) "33"
[3]u003d>
string(3) "333"
[4]u003d>
string(2) "44"
}

### Дивіться також

- [cubrid_seq_drop()](function.cubrid-seq-drop.md) - Видаляє елемент
зі стовпця типу послідовності, використовуючи OID
- [cubrid_seq_put()](function.cubrid-seq-put.md) - Оновлює
значення елемента стовпця типу послідовності, використовуючи OID
