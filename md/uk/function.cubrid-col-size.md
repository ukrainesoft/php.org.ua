- [«cubrid_col_get](function.cubrid-col-get.md)
- [cubrid_column_names »](function.cubrid-column-names.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримує кількість елементів у стовпці типу колекція з OID

#cubrid_col_size

(PECL CUBRID u003d 8.3.0)

cubrid_col_size — Отримує кількість елементів у стовпці типу колекція
по OID

### Опис

**cubrid_col_size**(resource `$conn_identifier`, string `$oid`, string
`$attr_name`): int

Функція **cubrid_col_size()** використовується для отримання кількості
елементів в атрибуті типу колекції (set, multiset, sequence).

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`oid`
OID екземпляра.

`attr_name`
Назва атрибута, з яким ви хочете працювати.

### Значення, що повертаються

Кількість елементів, у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------------------|
| 8.3.1 | Змінено значення, що повертається: у разі невдачі повертається **`false`**, а не -1. |

### Приклади

**Приклад #1 Приклад використання **cubrid_col_size()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");@cubrid_execute($conn, "DROP TABLE foo");cubrid_execute($conn, CREATE , b set(int), c list(int), d char(10))");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3 }, {11,22,33,333}, 'a')");$req u003d cubrid_execute($conn, "SELECT * FROM foo", CUBRID_INCLUDE_OID);cubrid_move_cursor($Rq; $req);$attr u003d cubrid_col_get($conn, $oid, "b");var_dump($attr);$size u003d cubrid_col_size($conn, $oid, "b");var_dump($size);cubrid_clo $req);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
string(1) "1"
[1]u003d>
string(1) "2"
[2]u003d>
string(1) "3"
}
int(3)
