- [«cubrid_prepare](function.cubrid-prepare.md)
- [cubrid_rollback »](function.cubrid-rollback.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Оновлює стовпець за допомогою OID

#cubrid_put

(PECL CUBRID u003d 8.3.0)

cubrid_put — Оновлює стовпець за допомогою OID

### Опис

**cubrid_put**(
resource `$conn_identifier`,
string `$oid`,
string `$attr` u003d ?,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`
): bool

Функція **cubrid_put()** використовується для оновлення атрибута екземпляра
цього `oid`.

Ви можете оновити один атрибут, використовуючи рядковий тип даних для
установки `attr`. У такому разі ви можете використати дані цілого
числа, числа з плаваючою комою або числа рядкового типу як
аргументу `value`. Щоб оновити кілька атрибутів, ви можете
пропустити аргумент `attr` та встановити аргумент `value` у вигляді
асоціативного масиву.

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання

`oid`
OID екземпляра, який необхідно оновити

`attr`
Ім'я атрибута, який потрібно оновити

`value`
Нове значення, яке необхідно присвоїти атрибуту

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_put()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");@cubrid_execute($conn, "DROP TABLE foo");cubrid_execute($conn, CREATE , b set(int), c list(int), d char(10))");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3 }, {11,22,33,333}, 'a')");cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(2, {4,5,7}, {44, 55,66,666}, 'b')"); attr u003d cubrid_col_get($conn, $oid, "b");var_dump($attr);cubrid_put($conn, $oid, "b", array(2, 4, 8));$attr u003d cubrid_col_get , $oid, "b");var_dump($attr);cubrid_close_request($req);cubrid_disconnect($conn);?> `

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

- [cubrid_get()](function.cubrid-get.md) - Отримує стовпець,
використовуючи OID
- [cubrid_set_add()](function.cubrid-set-add.md) - Вставляє один
елемент для встановлення стовпця типу за допомогою OID
- [cubrid_set_drop()](function.cubrid-set-drop.md) - Видаляє елемент
зі стовпця заданого типу, використовуючи OID
- [cubrid_seq_insert()](function.cubrid-seq-insert.md) - Вставляє
елемент в стовпець типу послідовності, використовуючи OID
- [cubrid_seq_drop()](function.cubrid-seq-drop.md) - Видаляє елемент
зі стовпця типу послідовності, використовуючи OID
- [cubrid_seq_put()](function.cubrid-seq-put.md) - Оновлює
значення елемента стовпця типу послідовності, використовуючи OID
