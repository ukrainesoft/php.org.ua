- [«cubrid_seq_put](function.cubrid-seq-put.md)
- [cubrid_set_autocommit »](function.cubrid-set-autocommit.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Вставляє один елемент для встановлення стовпця типу за допомогою OID

#cubrid_set_add

(PECL CUBRID u003d 8.3.0)

cubrid_set_add — Вставляє один елемент для встановлення стовпця типу з
допомогою OID

### Опис

**cubrid_set_add**(
resource `$conn_identifier`,
string `$oid`,
string `$attr_name`,
string `$set_element`
): bool

Функція **cubrid_set_add()** використовується для вставки одного елемента в
заданий атрибут типу (set, multiset, sequence).

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`oid`
OID екземпляра, з яким ви хочете працювати.

`attr_name`
Ім'я атрибута, який ви бажаєте вставити елемент.

`set_element`
Вміст елемента, який ви бажаєте вставити.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_set_add()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");@cubrid_execute($conn, "DROP TABLE foo");cubrid_execute($conn, CREATE , b set(int), c list(int), d char(10))");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3 }, {11,22,33,333}, 'a')");$req u003d cubrid_execute($conn, "SELECT * FROM foo", CUBRID_INCLUDE_OID);cubrid_move_cursor($Rq; $req);$attr u003d cubrid_col_get($conn, $oid, "b");var_dump($attr);cubrid_set_add($conn, $oid, "b", "4");$attr u003d cubrid_col_get($ , $oid, "b");var_dump($attr);cubrid_close_request($req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
string(1) "1"
[1]u003d>
string(1) "2"
[2]u003d>
string(1) "3"
}
array(4) {
[0]u003d>
string(1) "1"
[1]u003d>
string(1) "2"
[2]u003d>
string(1) "3"
[3]u003d>
string(1) "4"
}

### Дивіться також

- [cubrid_seq_drop()](function.cubrid-seq-drop.md) - Видаляє елемент
зі стовпця типу послідовності, використовуючи OID
