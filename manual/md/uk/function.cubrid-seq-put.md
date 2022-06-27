- [«cubrid_seq_insert](function.cubrid-seq-insert.md)
- [cubrid_set_add »](function.cubrid-set-add.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Оновлює значення елемента колонки типу послідовності,
використовуючи OID

#cubrid_seq_put

(PECL CUBRID u003d 8.3.0)

cubrid_seq_put — Оновлює значення елемента колонки типу
послідовності, використовуючи OID

### Опис

**cubrid_seq_put**(
resource `$conn_identifier`,
string `$oid`,
string `$attr_name`,
int `$index`,
string `$seq_element`
): bool

Функція **cubrid_seq_put()** використовується для оновлення вмісту
запитаного елемента в атрибуті sequent type за допомогою OID.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`oid`
OID екземпляра, з яким ви хочете працювати.

`attr_name`
Назва атрибута, який ви хочете оновити елемент.

`index`
Індекс (починаючи з 1) елемент, який ви хочете оновити.

`seq_element`
Новий контент, який ви бажаєте використовувати для оновлення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_seq_put()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");@cubrid_execute($conn, "DROP TABLE foo");cubrid_execute($conn, CREATE , b set(int), c sequence(int), d char(10))");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3) }, {11,22,33,333}, 'a')");$req u003d cubrid_execute($conn, "SELECT * FROM foo", CUBRID_INCLUDE_OID);cubrid_move_cursor($Rq; $req);$attr u003d cubrid_col_get($conn, $oid, "c");var_dump($attr);cubrid_seq_put($conn, $oid, "c", 1, "111");$attr u003d cubr_ $conn, $oid, "c");var_dump($attr);cubrid_close_request($req);cubrid_disconnect($conn);?> `

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
array(4) {
[0]u003d>
string(3) "111"
[1]u003d>
string(2) "22"
[2]u003d>
string(2) "33"
[3]u003d>
string(3) "333"
}

### Дивіться також

- [cubrid_seq_drop()](function.cubrid-seq-drop.md) - Видаляє елемент
зі стовпця типу послідовності, використовуючи OID
- [cubrid_seq_insert()](function.cubrid-seq-insert.md) - Вставляє
елемент в стовпець типу послідовності, використовуючи OID
