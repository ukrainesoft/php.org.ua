- [«cubrid_close_request](function.cubrid-close-request.md)
- [cubrid_col_size »](function.cubrid-col-size.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримання контенту стовпця типу колекція з OID

#cubrid_col_get

(PECL CUBRID u003d 8.3.0)

cubrid_col_get — отримання контенту стовпця типу колекція за OID

### Опис

**cubrid_col_get**(resource `$conn_identifier`, string `$oid`, string
`$attr_name`): array

Функція **cubrid_col_get()** використовується для отримання контенту
елемента типу колекція (set, multiset, sequence) як масиву.

### Список параметрів

`conn_identifier`
Ідентифікатор колекції.

`oid`
OID екземпляра, який ви хочете прочитати.

`attr_name`
Назва атрибута, який ви хочете прочитати.

### Значення, що повертаються

Індексований масив (починається з 0), що містить запитані
елементи у разі успіху.

**`false`** (для відхилення помилки від ситуації, коли атрибут містить
порожню колекцію або NULL, у разі виникнення помилки буде викликано
попередження; у цьому випадку потрібно використовувати функцію
[cubrid_error_code()](function.cubrid-error-code.md)), у випадку
невдачі.

### Приклади

**Приклад #1 Приклад використання **cubrid_col_get()****

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
